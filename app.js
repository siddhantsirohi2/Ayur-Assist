
var allSymptoms = {
    arthritis: ["Joint Pain", "Swelling", "Stiffness", "Limited Movement"],
    migraine: ["Headache", "Nausea", "Visual Disturbances", "Sensitivity To Light"],
    digestiveIssues: ["Indigestion", "Bloating", "Gas", "Diarrhea"],
    skinRash: ["Itching", "Redness", "Rash", "Dryness"],
    diabetes: ["Frequent Urination", "Increased Thirst", "Fatigue", "Blurred Vision"],
    hypertension: ["High Blood Pressure", "Headache", "Dizziness", "Chest Pain"],
    cold: ["Runny Nose", "Sneezing", "Cough", "Sore Throat"],
    allergies: ["Itchy Eyes", "Sneezing", "Congestion", "Skin Rash"],
    
};


const medicinalPlantsByDisease = {
    arthritis: ["Turmeric", "Ginger", "Boswellia"],
    migraine: ["Feverfew", "Butterbur", "Peppermint"],
    digestiveIssues: ["Ginger", "Peppermint", "Fennel"],
    skinRash: ["Aloe Vera", "Calendula", "Chamomile"],
    diabetes: ["Bitter Melon", "Fenugreek", "Cinnamon"],
    hypertension: ["Hawthorn", "Garlic", "Olive Leaf"],
    cold: ["Echinacea", "Elderberry", "Ginger"],
    allergies: ["Quercetin", "Nettle Leaf", "Butterbur"]
  };


  const diseaseInfo = {
    arthritis: "Arthritis is a common condition characterized by joint pain, swelling, stiffness, and limited movement. It can affect people of all ages and can be caused by various factors, including age, injury, or autoimmune disorders. Treatment often involves managing symptoms and may include the use of anti-inflammatory medications.",
    
    migraine: "Migraine is a neurological condition that causes severe headaches, often accompanied by symptoms like nausea, visual disturbances, and sensitivity to light and sound. Migraine triggers can vary among individuals and may include certain foods, stress, or hormonal changes. Management may involve identifying triggers and medications for pain relief.",
    
    digestiveIssues: "Digestive issues encompass a range of conditions related to the digestive system, such as indigestion, bloating, gas, and diarrhea. These issues can be caused by dietary choices, food intolerances, or gastrointestinal disorders. Treatment often involves dietary modifications, lifestyle changes, and medications as needed.",
    
    skinRash: "A skin rash refers to any abnormal change in the skin's color, texture, or appearance. Common symptoms include itching, redness, rash, and dryness. Skin rashes can be caused by allergies, infections, or underlying skin conditions. Treatment depends on the underlying cause and may involve topical creams, antihistamines, or antibiotics.",
    
    diabetes: "Diabetes is a chronic condition that affects blood sugar levels. Common symptoms include frequent urination, increased thirst, fatigue, and blurred vision. There are different types of diabetes, with type 2 being the most common. Management includes blood sugar monitoring, lifestyle changes, and medications as prescribed by a healthcare provider.",
    
    hypertension: "Hypertension, or high blood pressure, is a common cardiovascular condition that can lead to serious health problems if left uncontrolled. Symptoms may include high blood pressure readings, headaches, dizziness, and chest pain. Lifestyle modifications, such as a heart-healthy diet and regular exercise, are key components of managing hypertension.",
    
    cold: "The common cold is a viral respiratory infection characterized by symptoms like a runny nose, sneezing, coughing, and a sore throat. It is typically caused by rhinoviruses and can spread easily from person to person. While there is no cure for the common cold, rest, hydration, and over-the-counter remedies can help alleviate symptoms.",
    
    allergies: "Allergies refer to the body's abnormal immune response to substances (allergens) that are typically harmless. Common allergy symptoms include itchy eyes, sneezing, congestion, and skin rashes. Allergies can be triggered by various allergens, such as pollen, dust mites, or certain foods. Management involves allergen avoidance and, in some cases, allergy medications."
  };




  const medicinalPlantsForSymptoms = {
    JointPain: ["Turmeric", "Ginger", "Boswellia", "Eucalyptus"],
    Swelling: ["Parsley", "Dandelion", "Ginger", "Turmeric"],
    Stiffness: ["Turmeric", "Ginger", "Boswellia", "Eucalyptus"],
    LimitedMovement: ["Turmeric", "Ginger", "Boswellia", "Eucalyptus"],
    Headache: ["Peppermint", "Lavender", "Feverfew", "Butterbur"],
    Nausea: ["Ginger", "Peppermint", "Fennel", "Chamomile"],
    VisualDisturbances: ["Ginkgo Biloba", "Bilberry", "Eyebright", "Saffron"],
    SensitivityToLight: ["Eyebright", "Bilberry", "Ginkgo Biloba", "Saffron"],
    Indigestion: ["Ginger", "Peppermint", "Fennel", "Chamomile"],
    Bloating: ["Ginger", "Peppermint", "Fennel", "Chamomile"],
    Gas: ["Fennel", "Ginger", "Peppermint", "Chamomile"],
    Diarrhea: ["Psyllium Husk", "Aloe Vera", "Chamomile", "Peppermint"],
    Itching: ["Aloe Vera", "Calendula", "Chamomile", "Lavender"],
    Redness: ["Calendula", "Aloe Vera", "Chamomile", "Lavender"],
    Rash: ["Aloe Vera", "Calendula", "Chamomile", "Lavender"],
    FrequentUrination: ["Cranberry", "Bilberry", "Nettle", "Horsetail"],
    IncreasedThirst: ["Fenugreek", "Bilberry", "Nettle", "Cranberry"],
    Fatigue: ["Ginseng", "Ashwagandha", "Rhodiola", "Licorice Root"],
    BlurredVision: ["Ginkgo Biloba", "Bilberry", "Eyebright", "Saffron"],
    HighBloodPressure: ["Hawthorn", "Garlic", "Olive Leaf", "Hibiscus"],
    Dizziness: ["Ginger", "Ginkgo Biloba", "Ginseng", "Peppermint"],
    ChestPain: ["Cayenne Pepper", "Hawthorn", "Garlic", "Turmeric"],
    RunnyNose: ["Eucalyptus", "Peppermint", "Ginger", "Chamomile"],
    Sneezing: ["Nettle", "Eucalyptus", "Peppermint", "Ginger"],
    Cough: ["Thyme", "Honey", "Marshmallow Root", "Licorice Root"],
    SoreThroat: ["Honey", "Licorice Root", "Sage", "Chamomile"]
  };


  const symptomInfo = {
    JointPain: "Joint pain is a common symptom that can be caused by various conditions, including arthritis and injuries. It is characterized by discomfort, aching, or soreness in one or more joints.",
    Swelling: "Swelling, also known as edema, occurs when there is an abnormal buildup of fluid in the body's tissues. It can result from injuries, infections, or underlying health conditions.",
    Stiffness: "Stiffness in joints or muscles is a sensation of reduced flexibility and range of motion. It can be caused by conditions like arthritis, muscle strains, or overuse.",
    LimitedMovement: "Limited movement refers to difficulty or pain when trying to move a joint or body part. It can be associated with joint conditions such as arthritis or injuries.",
    Headache: "Headache is a common symptom characterized by pain or discomfort in the head or upper neck. Migraines and tension headaches are common types of headaches.",
    Nausea: "Nausea is an unpleasant sensation of wanting to vomit. It can be caused by various factors, including motion sickness, morning sickness, or digestive issues.",
    VisualDisturbances: "Visual disturbances include changes in vision such as blurred vision, visual auras, or flashes of light. They can be associated with migraines or eye conditions.",
    SensitivityToLight: "Sensitivity to light, or photophobia, is discomfort or pain in the eyes when exposed to bright light. It can be a symptom of migraines, eye infections, or other conditions.",
    Indigestion: "Indigestion, also known as dyspepsia, refers to discomfort or pain in the upper abdomen often accompanied by bloating and a sensation of fullness. It can result from various factors, including overeating or dietary choices.",
    Bloating: "Bloating is a sensation of fullness and tightness in the abdomen caused by excess gas. It can be associated with digestive issues and dietary factors.",
    Gas: "Gas in the digestive system can lead to bloating, belching, or flatulence. It is a normal part of the digestive process but can be excessive in some cases.",
    Diarrhea: "Diarrhea is characterized by loose, watery stools and increased bowel movements. It can be caused by infections, food intolerances, or gastrointestinal disorders.",
    Itching: "Itching is a common skin sensation that can result from various factors, including allergies, insect bites, or skin conditions like eczema.",
    Redness: "Redness of the skin, also known as erythema, is a common symptom of skin irritation, inflammation, or allergies. It can be associated with various skin conditions.",
    Rash: "A skin rash refers to any abnormal change in the skin's color, texture, or appearance. Rashes can be caused by allergies, infections, or underlying skin conditions.",
    FrequentUrination: "Frequent urination is the need to urinate more often than usual. It can be a symptom of various conditions, including diabetes, urinary tract infections, or prostate issues.",
    IncreasedThirst: "Increased thirst, or polydipsia, is a strong and persistent urge to drink more fluids than usual. It can be associated with conditions like diabetes or dehydration.",
    Fatigue: "Fatigue is a common symptom characterized by extreme tiredness and lack of energy. It can result from various factors, including stress, sleep disorders, or medical conditions.",
    BlurredVision: "Blurred vision is a visual disturbance where objects appear unclear or out of focus. It can be associated with various eye conditions or health issues like diabetes.",
    HighBloodPressure: "High blood pressure, or hypertension, is a cardiovascular condition where the force of blood against artery walls is consistently too high. It can lead to serious health issues if left uncontrolled.",
    Dizziness: "Dizziness is a sensation of lightheadedness or unsteadiness. It can result from various factors, including low blood pressure, inner ear problems, or dehydration.",
    ChestPain: "Chest pain is discomfort or pain in the chest area and can have various causes, including heart conditions, gastrointestinal issues, or muscle strains.",
    RunnyNose: "A runny nose, or rhinorrhea, is the discharge of a watery or thick mucus from the nose. It is a common symptom of viral infections like the common cold or allergies.",
    Sneezing: "Sneezing is a reflex action that expels air forcibly from the nose and mouth. It can be triggered by irritants in the nose, such as dust, pollen, or allergens.",
    Cough: "Coughing is a natural reflex that helps clear the airways of irritants, mucus, or foreign substances. It can be caused by respiratory infections, allergies, or smoking.",
    SoreThroat: "A sore throat is discomfort, pain, or scratchiness in the throat, often worsened by swallowing. It can be caused by viral infections, bacterial infections, or irritants."
  };



function populateSymptoms() {
    var diseaseSelect = document.getElementById("disease");
    var symptom1Select = document.getElementById("symptom1");
    var symptom2Select = document.getElementById("symptom2");

    var selectedDisease = diseaseSelect.value;

    symptom1Select.innerHTML = '<option value="">None</option>';
    symptom2Select.innerHTML = '<option value="">None</option>';

    var symptoms = allSymptoms[selectedDisease];
    if (symptoms) {
        symptoms.forEach(function (symptom) {
            symptom1Select.innerHTML += '<option value="' + symptom + '">' + symptom + '</option>';
        });
    }

  
    symptoms.forEach(function (symptom) {
        symptom2Select.innerHTML += '<option value="' + symptom + '">' + symptom + '</option>';
    });
}



function updateSymptomLists() {
    var symptom1Select = document.getElementById("symptom1");
    var symptom2Select = document.getElementById("symptom2");

    var diseaseSelect = document.getElementById("disease");
    var selectedDisease = diseaseSelect.value;
    var selectedSymptom1 = symptom1Select.value;
    

    symptom2Select.innerHTML = '<option value="">None</option>';

    var symptoms = allSymptoms[selectedDisease];
    if (symptoms) {
        symptoms.forEach(function (symptom) {
            if(symptom!=selectedSymptom1)
            symptom2Select.innerHTML += '<option value="' + symptom + '">' + symptom + '</option>';
        });
    }
}


function dotask(){
    const disp = document.getElementById('disp');
    const diseaseSelect = document.getElementById("disease").value;
    const symptom1Select = document.getElementById("symptom1").value;
    const symptom2Select = document.getElementById("symptom2").value;

    const ans = document.getElementById('ans');
    disp.style.display = "block";
    if(symptom1Select && symptom2Select){
    ans.innerHTML = `Patient has <i>${diseaseSelect}</i> with symptoms of <i>${symptom1Select}</i> and <i>${symptom2Select}</i>.`;
    }
    else if(symptom1Select){
        ans.innerHTML = `Patient has <i>${diseaseSelect}</i> with symptoms of <i>${symptom1Select}</i>`;
    }
    else if(symptom2Select){
        ans.innerHTML = `Patient has <i>${diseaseSelect}</i> with symptoms of <i>${symptom2Select}</i>`
    }
    else{
        ans.innerHTML = `Patient has <i>${diseaseSelect}</i>`;
    }

    const one = document.querySelector('#one');
    const two = document.querySelector('#two');
    const three = document.querySelector('#three');

    one.innerHTML = `<br><b>For ${diseaseSelect} :</b> <br> <p> ${diseaseInfo[diseaseSelect]}
    <br> <b>Medicinal Plants -> ${medicinalPlantsByDisease[diseaseSelect].join(", ")}
    </b></p>`;
    if(symptom1Select){
        two.innerHTML = `<br><p><b>${symptom1Select} :</b>  
        ${symptomInfo[symptom1Select.replaceAll(" ","")]}
        <br> <b>Medicinal Plants -> ${medicinalPlantsForSymptoms[symptom1Select.replaceAll(" ","")].join(", ")}</b>
    </p>`;
    }
    else{
        two.innerHTML ="";
    }
    if(symptom2Select){
        three.innerHTML = `<br><p><b>${symptom2Select}:</b>  
        ${symptomInfo[symptom2Select.replaceAll(" ","")]}
        <br> <b>Medicinal Plants -> ${medicinalPlantsForSymptoms[symptom2Select.replaceAll(" ","")].join(", ")}</b>
        </p>`;
    }
    else{
        three.innerHTML = "";
    }

    window.scrollBy({top:500, behavior:'smooth'});

    return false;   
}

