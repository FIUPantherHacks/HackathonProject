import React from 'react';
import Header from "../Header/Header";
import './styles.css';
export default function App() {
  
  return (
    <>
    <Header/>
    <section>
        <h1>Wash Your Hand</h1>
        <ul>
        <li> Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.</li>
        <li> It’s especially important to wash:</li>
        <ul>
                <li> Before eating or preparing food</li>
                <li> Before touching your face</li>
                <li> After using the restroom</li>
                <li> After leaving a public place</li>
                <li> After blowing your nose, coughing, or sneezing</li>
                <li> After handling your cloth face covering</li>
                <li> After changing a diaper</li>
                <li> After caring for someone sick</li>
                <li> After touching animals or pets</li>
            </ul>
        <li> If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.</li>
        <li> Avoid touching your eyes, nose, and mouth with unwashed hands.</li>
        </ul>  
    </section>
    <section>
        <h1>Avoid close contact</h1>
        <ul>
        <li>Inside your home: Avoid close contact with people who are sick.</li>
        <ul>
            <li>If possible, maintain 6 feet between the person who is sick and other household members.</li>
        </ul>
        <li>Outside your home: Put 6 feet of distance between yourself and people who don’t live in your household.</li>
        <ul>
            <li>Remember that some people without symptoms may be able to spread virus.</li>
            <li>Stay at least 6 feet (about 2 arms’ length) from other people.</li>
            <li>Keeping distance from others is especially important for people who are at higher risk of getting very sick. </li>
        </ul>
        </ul>
    </section>
    <section>
        <h1>Cover your mouth and nose with a cloth face cover when around others</h1>
            <ul>
                <li>You could spread COVID-19 to others even if you do not feel sick.</li>
                <li>he cloth face cover is meant to protect other people in case you are infected.</li>
                <li>Everyone should wear a cloth face cover in public settings and when around people who don’t live in your household, especially when other social distancing measures are difficult to maintain.</li>
                <ul>
                    <li>Cloth face coverings should not be placed on young children under age 2, anyone who has trouble breathing, or is unconscious, incapacitated or otherwise unable to remove the mask without assistance.</li>
                </ul>
                <li>Do NOT use a facemask meant for a healthcare worker. Currently, surgical masks and N95 respirators are critical supplies that should be reserved for healthcare workers and other first responders.</li>
                <li>Continue to keep about 6 feet between yourself and others. The cloth face cover is not a substitute for social distancing.</li>
            </ul>
    </section>
    <section>
        <h1>Cover coughs and sneezes</h1>
        <ul>
            <li>Always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow and do not spit.</li>
            <li>Throw used tissues in the trash.</li>
            <li>Immediately wash your hands with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol. </li>
        </ul>
    </section>
    <section>
        <h1>Clean and disinfect</h1>
        <ul>
            <li> Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.</li>
            <li> If surfaces are dirty, clean them. Use detergent or soap and water prior to disinfection.</li>
            <li>Then, use a household disinfectant. Most common EPA-registered household disinfectantsexternal icon will work.</li>
        </ul>
    </section>
    <section>
        <img src="../imgs/days.png" width="50" alt="logo" />
        <h1>Monitor Your Health Daily</h1>
        <ul>
            <li>Be alert for symptoms. Watch for fever, cough, shortness of breath, or other symptoms of COVID-19.</li>
            <ul>
                <li>Especially important if you are running essential errands, going into the office or workplace, and in settings where it may be difficult to keep a physical distance of 6 feet.</li>
            </ul>
            <li>Take your temperature if symptoms develop.</li>
            <ul>
                <li> Don’t take your temperature within 30 minutes of exercising or after taking medications that could lower your temperature, like acetaminophen.</li>
            </ul>
            <li>Follow CDC guidance if symptoms develop.</li>
        </ul>
    </section>
    </>
  );
}
