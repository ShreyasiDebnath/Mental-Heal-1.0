import React from 'react'

function Quiz() {
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');

    quizForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(quizForm);
        let score = 0;

        // Calculate the score based on user responses
        formData.forEach((value, key) => {
            score += parseInt(value);
        });

        // Provide a mental health evaluation based on the score
        let evaluation = '';
        if (score >= 50) {
            evaluation = 'Your mental health appears to be good.';
        } else if (score >= 25) {
            evaluation = 'You may be experiencing some mental health challenges. Consider seeking support.';
        } else {
            evaluation = 'It\'s important to prioritize your mental health and seek professional help if needed.check out our services';

        }

        // Display the evaluation
        quizResult.textContent = `Evaluation: ${evaluation}`;
        
    });
  return (
    <div>
        <div class="quiz-container">
        <h1>Check out your Mental Health</h1>
        <form id="quiz-form">
            <div class="question">1. How often do you feel anxious?</div>
            <div class="options">
                <label><input type="radio" name="q1" value="3"/> Never</label>
                <label><input type="radio" name="q1" value="2"/> Rarely</label>
                <label><input type="radio" name="q1" value="1"/> Sometimes</label>
                <label><input type="radio" name="q1" value="0"/> Often</label>
            </div>

            <div class="question">2. Have you experienced changes in your sleep patterns?</div>
            <div class="options">
                <label><input type="radio" name="q2" value="3"/> No, my sleep is normal</label>
                <label><input type="radio" name="q2" value="1"/> Yes, I have trouble sleeping</label>
                <label><input type="radio" name="q2" value="1"/> Yes, I sleep too much</label>
            </div>

            <div class="question">3. Do you have trouble concentrating on tasks?</div>
            <div class="options">
                <label><input type="radio" name="q3" value="3"/> No, I can concentrate well</label>
                <label><input type="radio" name="q3" value="0"/> Yes, I struggle with concentration</label>
            </div>

            <div class="question">4. How do you cope with stress?</div>
            <div class="options">
                <label><input type="radio" name="q4" value="3"/> I have healthy coping strategies</label>
                <label><input type="radio" name="q4" value="2"/> I try to cope but sometimes it's difficult</label>
                <label><input type="radio" name="q4" value="1"/> I tend to avoid stressors</label>
                <label><input type="radio" name="q4" value="0"/> I don't cope well with stress</label>
            </div>

            <div class="question">5. Do you have a support system (friends, family, etc.)?</div>
            <div class="options">
                <label><input type="radio" name="q5" value="3"/> Yes, I have a strong support system</label>
                <label><input type="radio" name="q5" value="2"/> I have some support, but it could be better</label>
                <label><input type="radio" name="q5" value="1"/> I have limited support</label>
                <label><input type="radio" name="q5" value="0"/> I have no support system</label>
            </div>
            

<div class="question">6. Do you often feel overwhelmed by your emotions?</div>
<div class="options">
    <label><input type="radio" name="q6" value="0"/> Yes, frequently</label>
    <label><input type="radio" name="q6" value="1"/> Sometimes</label>
    <label><input type="radio" name="q6" value="2"/> Rarely</label>
    <label><input type="radio" name="q6" value="3"/> No, I manage my emotions well</label>
</div>

<div class="question">7. How would you rate your self-esteem?</div>
<div class="options">
    <label><input type="radio" name="q7" value="3"/> High, I have good self-esteem</label>
    <label><input type="radio" name="q7" value="2"/> Moderate, it varies</label>
    <label><input type="radio" name="q7" value="1"/> Low, I often doubt myself</label>
    <label><input type="radio" name="q7" value="0"/> Very low, I have poor self-esteem</label>
</div>

<div class="question">8. How often do you engage in physical activity?</div>
<div class="options">
    <label><input type="radio" name="q8" value="3"/> Regularly, I exercise frequently</label>
    <label><input type="radio" name="q8" value="2"/> Occasionally, I try to stay active</label>
    <label><input type="radio" name="q8" value="1"/> Rarely, I'm mostly sedentary</label>
    <label><input type="radio" name="q8" value="0"/> Never, I don't exercise</label>
</div>

<div class="question">9. Do you have a history of substance abuse (e.g., drugs, alcohol)?</div>
<div class="options">
    <label><input type="radio" name="q9" value="0"/> Yes, I currently struggle with substance abuse</label>
    <label><input type="radio" name="q9" value="1"/> Yes, but I'm in recovery</label>
    <label><input type="radio" name="q9" value="2"/> No, but I've used substances in the past</label>
    <label><input type="radio" name="q9" value="3"/> No, I've never used substances</label>
</div>

<div class="question">10. How well do you sleep at night?</div>
<div class="options">
    <label><input type="radio" name="q10" value="3"/> Very well, I get restful sleep</label>
    <label><input type="radio" name="q10" value="2"/> Okay, but I sometimes wake up during the night</label>
    <label><input type="radio" name="q10" value="1"/> Poorly, I have frequent sleep disturbances</label>
    <label><input type="radio" name="q10" value="0"/> Terribly, I often can't sleep through the night</label>
</div>


<div class="question">11. How often do you experience mood swings?</div>
<div class="options">
    <label><input type="radio" name="q11" value="0"/> Frequently, my mood changes often</label>
    <label><input type="radio" name="q11" value="1"/> Sometimes, I have occasional mood swings</label>
    <label><input type="radio" name="q11" value="2"/> Rarely, I'm generally stable</label>
    <label><input type="radio" name="q11" value="3"/> Almost never, I have good emotional stability</label>
</div>

<div class="question">12. How well do you manage your daily stressors?</div>
<div class="options">
    <label><input type="radio" name="q12" value="3"/> Very well, I handle stress effectively</label>
    <label><input type="radio" name="q12" value="2"/> Okay, but it's a struggle at times</label>
    <label><input type="radio" name="q12" value="1"/> Not well, I often feel overwhelmed</label>
    <label><input type="radio" name="q12" value="0"/> Very poorly, I'm constantly stressed</label>
</div>

<div class="question">13. How satisfied are you with your work-life balance?</div>
<div class="options">
    <label><input type="radio" name="q13" value="3"/> Very satisfied, I have a great balance</label>
    <label><input type="radio" name="q13" value="2"/> Somewhat satisfied, it could be better</label>
    <label><input type="radio" name="q13" value="1"/> Not satisfied, I struggle to balance work and life</label>
    <label><input type="radio" name="q13" value="0"/> Very unsatisfied, it's a constant source of stress</label>
</div>

<div class="question">14. Do you engage in relaxation techniques (e.g., meditation, deep breathing) regularly?</div>
<div class="options">
    <label><input type="radio" name="q14" value="3"/> Yes, I practice relaxation techniques daily</label>
    <label><input type="radio" name="q14" value="2"/> Occasionally, I use them when needed</label>
    <label><input type="radio" name="q14" value="1"/> Rarely, I've tried but don't do it regularly</label>
    <label><input type="radio" name="q14" value="0"/> No, I never use relaxation techniques</label>
</div>

<div class="question">15. Have you sought professional help for your mental health in the past?</div>
<div class="options">
    <label><input type="radio" name="q15" value="3"/> Yes, and it was beneficial</label>
    <label><input type="radio" name="q15" value="2"/> Yes, but it didn't help much</label>
    <label><input type="radio" name="q15" value="1"/> No, but I'm considering it</label>
    <label><input type="radio" name="q15" value="0"/> No, I've never sought professional help</label>
</div>


<div class="question">16. How often do you experience social withdrawal or isolation?</div>
<div class="options">
    <label><input type="radio" name="q16" value="0"/> Frequently, I often withdraw from social interactions</label>
    <label><input type="radio" name="q16" value="1"/> Sometimes, I occasionally isolate myself</label>
    <label><input type="radio" name="q16" value="2"/> Rarely, I'm generally social</label>
    <label><input type="radio" name="q16" value="3"/> Almost never, I'm always socially engaged</label>
</div>

<div class="question">17. How would you rate your overall life satisfaction?</div>
<div class="options">
    <label><input type="radio" name="q17" value="3"/> Very satisfied, I'm content with my life</label>
    <label><input type="radio" name="q17" value="2"/> Somewhat satisfied, but there's room for improvement</label>
    <label><input type="radio" name="q17" value="1"/> Not very satisfied, I'm often unhappy</label>
    <label><input type="radio" name="q17" value="0"/> Very unsatisfied, I'm extremely dissatisfied</label>
</div>

<div class="question">18. How do you handle conflict in your relationships?</div>
<div class="options">
    <label><input type="radio" name="q18" value="3"/> Effectively, I communicate openly and resolve issues</label>
    <label><input type="radio" name="q18" value="2"/> Sometimes well, but conflicts can linger</label>
    <label><input type="radio" name="q18" value="1"/> Poorly, I avoid conflict or argue frequently</label>
    <label><input type="radio" name="q18" value="0"/> Very poorly, I have constant unresolved conflicts</label>
</div>

<div class="question">19. How often do you experience racing thoughts or restlessness?</div>
<div class="options">
    <label><input type="radio" name="q19" value="0"/> Very often, it's a constant struggle</label>
    <label><input type="radio" name="q19" value="1"/> Often, I frequently have racing thoughts</label>
    <label><input type="radio" name="q19" value="2"/> Occasionally, but not too often</label>
    <label><input type="radio" name="q19" value="3"/> Rarely, I rarely experience racing thoughts</label>
</div>

<div class="question">20. How would you describe your ability to ask for help or support when needed?</div>
<div class="options">
    <label><input type="radio" name="q20" value="3"/> Excellent, I'm comfortable seeking help</label>
    <label><input type="radio" name="q20" value="2"/> Good, but I hesitate at times</label>
    <label><input type="radio" name="q20" value="1"/> Fair, I find it challenging to ask for help</label>
    <label><input type="radio" name="q20" value="0"/> Poor, I rarely ask for help even when needed</label>
</div>



            <input type="submit" value="Submit"/>
        </form>

        <div class="result" id="quiz-result"></div>
    </div>
    </div>
  )
}

export default Quiz