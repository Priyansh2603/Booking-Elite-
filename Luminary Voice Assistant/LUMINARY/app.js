const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning sir");
    }

    else if(hr == 12) {
        speak("Good noon sir");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon sir");
    }

    else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', ()=>{
    speak("Welcome to Luminary");
    wishMe();
    speak("How may I help you");
  
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Sir";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine sir tell me how can i help you";
        speech.text = finalText;
    }
    else if(message.includes('best mall in coimbatore')|| message.includes('brookfield coimbatore')) {
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = " For going to brooke field mall Head east toward State Bank Rd for 17 metres . then Turn left onto State Bank Road 3 min for 400 metre  afer moving then. At the round about, take the 1st exit onto Old Post Office Road for 300 metre then. Take Brooke Bond Road/Dr Krishnasamy Mudaliyar Road to Devanga High School Road in Sukrawar Pettai for 1.1 kilometre after crossing then . Use the left lane to turn left onto NH948 then. take Slight left after it Sharp right toward Brooke Bond Road/Dr Krishnasamy Mudaliyar Road  and then move straight for 190 metre straight.  after  that Continue onto Brooke Bond Road/Dr Krishnasamy Mudaliyar Road , then go straight for 550 metre , then .Continue on Devanga High School Road. Take VCV Road to Brooke Bond Rd/Dr Krishnasamy Mudaliyar Road . move straight for 650 metre  after then Turn left onto Devanga High School Road and go 280 metre then  Turn left onto Devanga High School Road and move straight for 280 metre .Turn right at the 1st cross street onto VCV Road. move ahead for 300 metre turn right onto Street Number 1/Verivada Road .go ahead  after that Turn right onto Brooke Bond Rd/Dr Krishnasamy Mudaliyar Road . go ahead for 290 metre  and turn left . You have reached your destination."
        
      speech.text = finalText;
    }
    else if(message.includes('best cinema in coimbatore')|| (message .includes ('arasan Cinema'))) {
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText ='For going to Arasan Cineams Head east toward State Bank Rd. Turn left onto State Bank Rd  Pass by Divisional Office of The Fire and Rescue  Services (on the right). At the roundabout, take the 2nd exit onto Old Postoffice Road. Pass by Coimbatore City Police Commissioner Office (on the left). At the roundabout, take the 2nd exit onto Huzur Rd. Turn right onto Government Arts College Rd. At the roundabout, take the 3rd exit. Continue onto Race Course Rd. Turn right.Turn left onto Nagapattinam - Coimbatore Gundlupet Hwy/Trichy Rd. Pass by Redfields Post Office & Logistics PostCentre,Coimbatore (on the left).At the roundabout, take the 4th exit and stay on Nagapattinam - Coimbatore - GundlupetHwy/Trichy Rd.Pass by CD Park (on the left in 450 m).Follow Nanjundapuram Rd to Sarada Mill Rd in Teachers Colony, Podanur. You have reached your destination.'
        speech.text = finalText;
    }
    else if(message.includes('maha shiva adiyog statue coimbatore')|| (message .includes ('adiyogi statue coimbatore'))) {
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText ='FOr going to Maha Shiva Adiyogi statue,Head east toward State Bank Road Drive from Perur Main Rd, Siruvani Main Rd and Poondi Road to Ikkaraibooluvampatti.Turn left onto State Bank Road.Pass by Divisional Office of The Fire and Rescue Services (on the right).At the roundabout, take the 1st exit onto Old Post Office Rd.Use any lane to turn left onto NH948 At the roundabout, take the 2nd exit and stay on NH948.Turn left to stay on NH948.Pass by Senthil Hospital (on the right in 650 m).Make a U-turn.Turn left onto Vysial St.Pass by Sri Vimalnath Jain Temple (on the right).At Stat Bank of India, continue onto Perur Main Rd.Pass by the lake (on the right in 400 m). Continue onto Siruvani Main Road.Pass by City Union Bank ATM (on the left in 600 m). Turn right onto Poondi Road.Drive to your destination.Turn right.Slight left.Destination will be on the left.'
        speech.text = finalText;
    }
    else if(message.includes('hindustan college coimbatore')) {
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText ='FOr going to Hindusthan College,Head east toward State Bank Rd. Turn left onto State Bank Rd. Pass by Divisional Office of The Fire and RescueServices (on the right). At the roundabout, take the 3rd exit and stay onState Bank Rd.Turn left after Vivo.Sharp right onto Nagapattinam - Coimbatore -Gundlupet Hwy/Trichy Rd.Continue to follow Nagapattinam - Coimbatore - Gundlupet Highway. Pass by Seesha Medical Center (on the left).Turn left onto B K Chetty Street. Slight left onto Vincent Rd.Turn left toward Ukkadam Sungam Bypass Rd. Turn right onto Ukkadam Sungam Bypass Rd.Pass by the church (on the left).Turn left.Turn right toward NH948.You have reached your Destination'
        speech.text = finalText;
    }
    else if(message.includes('gd car museum coimbatore')||message.includes('museum in coimbatore')) {
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText ='For going to Gedee Car Mueseum,Head east toward State Bank Rd. Turn left onto State Bank Rd.Pass by Divisional Office of The Fire and RescueServices.At the roundabout, take the 2nd exit onto Old Post Office Rd.Pass by Coimbatore City Police Commissioner Office .At the roundabout, take the 2nd exit onto Huzur Rd. Pass by Corporation Office Central Zone. Turn right onto NH94. Pass by R.K. Sreerangammal Kalvi Nilayam.Make a U-turn at Netaji Rd.Pass by Senthil Towers (on the right).Turn left.You have reached your destination'
        speech.text = finalText;
    }
    else if(message.includes('india gate')||message.includes('give directions to India gate')) {
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText ='For going to India Gate, Head north toward Chelmsford Road.Take Connaught Cir and Janpath Rd to Man Singh Rd in Pataudi House, New Delhi.Turn left onto Chelmsford Road.Pass by Avon Store (on the right).Turn left onto Connaught Circle.Pass by Punjab & Sindh Bank (on the right)Slight left onto Janpath Road.Pass by Bank of India (on the left).At Windsor Pl, take the 2nd exit onto Ashoka Road.At Panchamukhi Chowk, take the 4th exit onto ManSingh Road.Continue on Akbar Rd. Drive to C - Hexagon/India Gate Circle.At the roundabout, take the 1st exit onto Akbar Road.Use any lane to turn slightly left onto C -Hexagon/India Gate Circle.You have reached your destination'
        speech.text = finalText;
    }
    else if(message.includes('hawa mahal')||message.includes('give directions to hawa mahal')) {
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText ='For going to hawa mahal, Head northwest on Ram Mandir Rd toward Kabir Marg. Turn right onto Kabir Marg.Follow Shiv Marg, Jhotwara Rd and Chanpole Bazar Rd to Tripolia Bazar in Chandpole.At Collectorate Cir, take the 3rd exit onto Shiv Marg.Pass by Hotel Jaipur Ashok (on the right).At the roundabout, take the 2nd exit and stay on Shiv Marg.Pass by Jaipur Inn (on the right).Turn right onto Jhotwara Rd/Nirwan Marg/SC Road.Continue to follow Jhotwara Road.Pass by State Bank of India ATM (on the right).Continue onto Chanpole Bazar Rd.Pass by the monument (on the left).At Choti Chaupar/Choti Chopad, take the 2nd exit onto Tripolia Bazar.At Badi Chopad, take the 1st exit onto Hawa Mahal Road.Destination will be on the left.You have reached your destination'
        speech.text = finalText;
    }
    else if(message.includes('Gateway of India')||message.includes('give directions to gateway of india')) {
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText ='For going to hawa mahal, Head west on Bellasis Rd/Jehangir Boman Behram Road.Pass by Great Eastern Royale (on the left).Continue onto Javji Dadaji Marg.Pass by Bhatia Hospital (on the left in 450 m)At the roundabout, take the 1st exit onto Kennedy Bridge.Turn right onto Sardar Vallabhbhai Patel Rd/Warerkar Bridge.Continue to follow Sardar Vallabhbhai Patel Rd Sharp left onto Chowpatty Seaface/Netaji Subhash Chandra Bose Rd.Continue to follow Netaji Subhash Chandra Bose Rd.Pass by the park (on the right).Turn left onto Madame Cama Rd/Uttara Rd. Pass by Shreyas (on the left).Follow Chhatrapati Shivaji Maharaj Marg to MB Marg.At SP Mukherjee Chowk, take the 2nd exit onto Chhatrapati Shivaji Maharaj Marg.Chhatrapati Shivaji Maharaj Marg turns slightly right and becomes MB Marg.You have reached your destination'
        speech.text = finalText;
    }
    else if(message.includes('Kochi beach')||message.includes('give directions to kochi beach')) {
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText ='For going to kochi, 1. Head south on Karshaka Rd toward Thenamparambil Cheeckachan Rd. Turn left toward Sahodaran Ayyappan Rd.Merge with Sahodaran Ayyappan Rd.Continue on Panampilly Nagar Ave to PerumanoorTurn right at Manorama Jct onto Panampilly Nagar Ave.Turn right onto Kizhavana Rd.Pass by Friends Restaurant (on the left).Continue on Mahatma Gandhi Rd. Take Old NH 47, P T.Jacob Rd and K.J. Herschel Rd to Dutch Cemetery Rd.Turn left at Atlantis Jct onto Mahatma Gandhi Rd. Pass by the petrol pump (on the left in 850 m).Continue onto Old NH 47.Turn left to stay on Old NH 47. Turn right.At the roundabout, continue straight onto Thoppumpady Bridge .Turn right at Thoppumpady Jct onto Aroor -Thoppumpady Rd. Turn left after the church (on the right). Pass by State Bank of India (on the left).Turn right onto Beach Rd/K.J. Herschel Rd.Continue to follow K.J. Herschel Rd.Pass by the church (on the right in 850 m).Continue on Dutch Cemetery Rd to your destination.Turn left after Old Lighthouse Bristow Hotel -Seaview Heritage Hotel (on the left).Turn left. Turn left.Destination will be on the right.You have reached your destination'
        speech.text = finalText;
    }
    

    else if(message.includes('name')) {
        const finalText = "My name is Luminary";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if(message.includes('my location')) {
        window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "getting your location";
        speech.text = finalText;
    }

    else if(message.includes('open map')||message.includes('where is') ||message.includes('give direction')||message.includes ('go to')||message.includes('take me to')) {
      window.open(`http://maps.google.com/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Searching Google Maps";
       speech.text = finalText;
    } 

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('which are')||message.includes(' ')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('open maps')){
        window.open(`https://www.google.com/maps${message.replace("Maps ", "")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    
    }

    else {
        
        const finalText = "Sorry I am unable to find what you are looking for! ";
        speech.text = finalText;
    }


    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 0.7;

    window.speechSynthesis.speak(speech);
}