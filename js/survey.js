/* ==========================================================================
   2026 Survey Form Logic & Trip Matching
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 1;
    const totalSteps = 4;
    const answers = { travel_type: null, climate: null, budget: null };
    
    const steps = [
        document.getElementById('step1'),
        document.getElementById('step2'),
        document.getElementById('step3'),
        document.getElementById('step4')
    ];
    
    const btnNext = document.getElementById('btnNext');
    const btnBack = document.getElementById('btnBack');
    const progressFill = document.getElementById('progressFill');
    const stepLabel = document.getElementById('stepLabel');
    const stepPercent = document.getElementById('stepPercent');
    
    if (!btnNext || steps.filter(Boolean).length < 4) return; // Exit if not on survey page

    // Select options logic
    document.querySelectorAll('.survey-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const field = opt.dataset.field;
            answers[field] = opt.dataset.value;
            
            document.querySelectorAll(`.survey-option[data-field="${field}"]`).forEach(o => {
                o.classList.remove('active');
            });
            opt.classList.add('active');
            const err = document.getElementById(field + 'Error') || document.getElementById('travelTypeError');
            if (err) err.style.display = 'none';
        });
    });
    
    // Budget radio logic
    document.querySelectorAll('.budget-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.budget-option').forEach(o => {
                o.style.borderColor = '#CBD5E1';
                o.style.background = '#F8FAFC';
                o.style.color = 'var(--color-text)';
            });
            opt.style.borderColor = 'var(--color-primary)';
            opt.style.background = 'rgba(255, 87, 34, 0.08)';
            opt.style.color = 'var(--color-primary-dark)';
            const radio = opt.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
            document.getElementById('budgetError').style.display = 'none';
        });
    });
    
    // Real-time validation listeners to instantly hide errors when user types
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    if (nameInput) nameInput.addEventListener('input', () => document.getElementById('nameError').style.display = 'none');
    if (emailInput) emailInput.addEventListener('input', () => document.getElementById('emailError').style.display = 'none');

    function validateStep(n) {
        let ok = true;
        if(n === 1) {
            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            if(!name) { 
                const err = document.getElementById('nameError');
                err.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> يرجى إدخال الاسم الكريم للمتابعة';
                err.style.display = 'block'; 
                ok = false; 
            }
            if(!email || !email.includes('@')) { 
                const err = document.getElementById('emailError');
                err.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> يرجى إدخال بريد إلكتروني صحيح (يحتوي على @)';
                err.style.display = 'block'; 
                ok = false; 
            }
        } else if(n === 2) {
            if(!answers.travel_type) { 
                const err = document.getElementById('travelTypeError');
                err.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> يرجى اختيار نوع الرحلة للمتابعة';
                err.style.display = 'block'; 
                ok = false; 
            }
        } else if(n === 3) {
            const b = document.querySelector('input[name="budget"]:checked');
            if(!b) { 
                const err = document.getElementById('budgetError');
                err.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> يرجى تحديد الميزانية المتاحة للمتابعة';
                err.style.display = 'block'; 
                ok = false; 
            } else { answers.budget = b.value; }
            if(!answers.climate) { 
                const err = document.getElementById('climateError');
                err.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> يرجى اختيار المناخ المفضل للمتابعة';
                err.style.display = 'block'; 
                ok = false; 
            }
        }
        return ok;
    }
    
    function updateUI() {
        steps.forEach((s, i) => {
            if (i + 1 === currentStep) {
                s.style.display = 'block';
                s.classList.add('active');
            } else {
                s.style.display = 'none';
                s.classList.remove('active');
            }
        });
        btnBack.style.visibility = currentStep > 1 ? 'visible' : 'hidden';
        btnNext.innerHTML = currentStep === totalSteps ? TEXTS[activeLang].btnShowTrips : TEXTS[activeLang].btnNext;
        const pct = Math.round((currentStep / totalSteps) * 100);
        progressFill.style.width = pct + '%';
        stepPercent.textContent = `(${pct}%)`;
        stepLabel.textContent = TEXTS[activeLang].stepOf(currentStep, totalSteps);
        
        if(currentStep === totalSteps) {
            const name = document.getElementById('name').value;
            const budgetLabels = activeLang === 'ar' ? { low:'اقتصادي', medium:'متوسط', high:'مرتفع', luxury:'فاخر' } : { low:'Budget', medium:'Medium', high:'High', luxury:'Luxury' };
            const travelLabels = activeLang === 'ar' ? { family:'عائلة', couple:'شريك', solo:'منفرد', friends:'أصدقاء' } : { family:'Family', couple:'Couple', solo:'Solo', friends:'Friends' };
            const climateLabels = activeLang === 'ar' ? { beach:'شاطئ وبحر', desert:'صحراء وتاريخ', mountain:'جبال وطبيعة', city:'مدن ومعالم' } : { beach:'Beach & Sea', desert:'Desert & History', mountain:'Mountains & Nature', city:'Cities & Landmarks' };
            
            document.getElementById('summaryCells').innerHTML = `
                <div style="display:flex;gap:1rem;align-items:center;background:var(--color-surface);padding:1.2rem 1.5rem;border-radius:14px;box-shadow:0 2px 8px rgba(0,0,0,0.03);border:1px solid var(--color-border);"><span><i class="fa-solid fa-user" style="color:var(--color-primary);font-size:1.4rem;"></i></span><span style="color:var(--color-text-muted);">${TEXTS[activeLang].summaryName}</span><strong style="color:var(--color-primary-dark);margin-inline-start:auto;">${name}</strong></div>
                <div style="display:flex;gap:1rem;align-items:center;background:var(--color-surface);padding:1.2rem 1.5rem;border-radius:14px;box-shadow:0 2px 8px rgba(0,0,0,0.03);border:1px solid var(--color-border);"><span><i class="fa-solid fa-plane" style="color:var(--color-primary);font-size:1.4rem;"></i></span><span style="color:var(--color-text-muted);">${TEXTS[activeLang].summaryTravel}</span><strong style="color:var(--color-primary-dark);margin-inline-start:auto;">${travelLabels[answers.travel_type]}</strong></div>
                <div style="display:flex;gap:1rem;align-items:center;background:var(--color-surface);padding:1.2rem 1.5rem;border-radius:14px;box-shadow:0 2px 8px rgba(0,0,0,0.03);border:1px solid var(--color-border);"><span><i class="fa-solid fa-wallet" style="color:var(--color-primary);font-size:1.4rem;"></i></span><span style="color:var(--color-text-muted);">${TEXTS[activeLang].summaryBudget}</span><strong style="color:var(--color-primary-dark);margin-inline-start:auto;">${budgetLabels[answers.budget]}</strong></div>
                <div style="display:flex;gap:1rem;align-items:center;background:var(--color-surface);padding:1.2rem 1.5rem;border-radius:14px;box-shadow:0 2px 8px rgba(0,0,0,0.03);border:1px solid var(--color-border);"><span><i class="fa-solid fa-cloud-sun" style="color:var(--color-primary);font-size:1.4rem;"></i></span><span style="color:var(--color-text-muted);">${TEXTS[activeLang].summaryClimate}</span><strong style="color:var(--color-primary-dark);margin-inline-start:auto;">${climateLabels[answers.climate]}</strong></div>
            `;
        }
    }

    btnNext.addEventListener('click', () => {
        if(!validateStep(currentStep)) return;
        if(currentStep < totalSteps) {
            currentStep++;
            updateUI();
        } else {
            submitSurvey();
        }
    });
    
    btnBack.addEventListener('click', () => {
        if(currentStep > 1) {
            currentStep--;
            updateUI();
        }
    });
    
    function submitSurvey() {
        document.getElementById('surveySection').style.display = 'none';
        document.getElementById('resultsContainer').style.display = 'block';
        const name = document.getElementById('name').value;
        document.getElementById('resultsTitle').innerHTML = TEXTS[activeLang].resultsTitleName(name);
        
        // Filter TRIPS_DATA (available from main.js)
        const matched = TRIPS_DATA.filter(t => 
            t.climate === answers.climate || 
            t.budget_tier === answers.budget || 
            t.travel_type.includes(answers.travel_type)
        );
        
        // Custom simple render just for results
        function renderCards(trips, containerId) {
            const container = document.getElementById(containerId);
            container.innerHTML = trips.map(trip => {
                const title = activeLang === 'ar' ? trip.title_ar : trip.title_en;
                const desc  = activeLang === 'ar' ? trip.desc_ar  : trip.desc_en;
                const bookBtn = TEXTS[activeLang].bookNow;
                return `
                <div class="trip-card" style="position:relative; background:var(--color-surface); border-radius:20px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08); border:1px solid rgba(255,87,34,0.15); display:flex; flex-direction:column; transition:transform 0.3s ease;">
                    <div class="trip-card-thumb" style="height:240px; width:100%; background:url('${trip.image}') center/cover no-repeat; position:relative;">
                        <span class="trip-card-price" data-price-usd="${trip.price}" style="top:1rem !important; bottom:auto !important; left:auto !important; right:1rem !important; width:fit-content !important; height:fit-content !important; display:inline-block !important; background:rgba(255,255,255,0.95); backdrop-filter:blur(8px); color:var(--color-primary); font-weight:800; font-size:1.1rem; padding:0.5rem 1.2rem; border-radius:30px; box-shadow:0 4px 15px rgba(0,0,0,0.1); border:1px solid rgba(255,87,34,0.2); z-index:10;">${trip.currency}${trip.price}</span>
                    </div>
                    <div class="trip-card-body" style="padding:1.8rem 1.5rem 1.2rem; flex:1; display:flex; flex-direction:column;">
                        <h3 class="trip-card-title" style="font-size:1.3rem; font-weight:800; color:var(--color-primary-dark); margin-bottom:0.6rem; font-family:var(--font-ar-display);">${title}</h3>
                        <p style="color:var(--color-text-muted); font-size:0.95rem; line-height:1.6; margin-bottom:1.5rem;">${desc}</p>
                    </div>
                    <div class="trip-card-footer" style="padding:0 1.5rem 1.8rem;">
                        <a href="trip.html?id=${trip.id}" class="btn-primary" style="display:block; text-align:center; padding:0.8rem; border-radius:14px; font-weight:700; font-size:1rem; box-shadow:0 4px 15px rgba(255,87,34,0.2);">${bookBtn}</a>
                    </div>
                </div>`;
            }).join('');
        }
        
        if(matched.length > 0) {
            // Sort by relevance (basic scoring)
            matched.sort((a,b) => {
                let scoreA = (a.climate === answers.climate ? 2 : 0) + (a.budget_tier === answers.budget ? 1 : 0);
                let scoreB = (b.climate === answers.climate ? 2 : 0) + (b.budget_tier === answers.budget ? 1 : 0);
                return scoreB - scoreA;
            });
            renderCards(matched.slice(0, 3), 'resultsGrid');
        } else {
            document.getElementById('resultsGrid').style.display = 'none';
            document.getElementById('noResults').style.display = 'block';
            renderCards(TRIPS_DATA.slice(0, 3), 'backupGrid');
        }
        
        if (typeof convertAllPrices === 'function') convertAllPrices();
    }

    window.updateSurveyUI = () => {
        updateUI();
        const resultsContainer = document.getElementById('resultsContainer');
        if (resultsContainer && resultsContainer.style.display === 'block') {
            submitSurvey();
        }
    };
});
