<h1 align="center" style="border-bottom: none">
    <b>
        <a href="#"> <b>Career X</b> </a><br>
    </b>
    ⭐️-------An AI Based Career Counseling------⭐️ <br>
</h1>

# [`Website link`](https://vashisht-career-x.vercel.app/)  [`Demo video link `](https://www.youtube.com/watch?v=P99eEpQ2YNE) 

The AI based career counseling (CareerX) is a comprehensive resource designed to assist secondary level students in making informed career choices. This project includes aptitude, domain, and personality tests to assess students' strengths, interests, and work styles. Each test category provides percentage-based feedback, enabling students to understand their suitability for various career paths. Additionally, AI-based counseling analyzes test results alongside other factors to offer personalized career guidance. For educators, this project offers an accessible way to empower students in exploring and deciding on their future careers early in their educational journey espically for students in secondary students living in rural areas . By facilitating informed decision-making, this project aims to increase students' chances of finding success and satisfaction in their chosen professions.

## Team Details
`Team number` : Gopher_Bots

| Name    | Email           |
|---------|-----------------|

| I Ashwin Kumar | ashwinkumari.cse2022@citchennai.net |
| Abishek S H | abisheksh.cse2022@citchennai.net |
| Ayyappan MP | ayyappanmp.cse2022@citchennai.net |

<div style="display: flex; flex-wrap: wrap;">
    <img src="https://github.com/Valan-Tamil-Dasan/Vashisht-CareerX/assets/115523703/707f4339-7a3b-48e2-8075-23fbf255d620" alt="Image 3" style="width: 30%; margin: 5px;">
    <img src="https://github.com/Valan-Tamil-Dasan/Vashisht-CareerX/assets/115523703/72d26073-c43f-4ade-b10f-b4ff8af18d4c" alt="Image 1" style="width: 30%; margin: 5px;">
    <img src="https://github.com/Valan-Tamil-Dasan/Vashisht-CareerX/assets/115523703/83afd5a6-f502-4e92-a6c4-1d3d91555fd8" alt="Image 2" style="width: 30%; margin: 5px;">
</div>

## Problem statement 
Making career choices and AI based counselling accessible to every child at secondary level along with aptitude tests and detailed career paths.

The problem statement of making career choices and AI-based counseling accessible to every child at the secondary level, along with aptitude tests and detailed career paths, represents a critical need in education and career development. It addresses the fundamental challenge of guiding young individuals towards meaningful and fulfilling career paths by leveraging technology and personalized support. The severity of this issue is profound, as many students face uncertainty and lack adequate resources to make informed decisions about their futures. By providing accessible AI-based counseling and aptitude tests, we can empower students to explore various career options tailored to their interests, strengths, and aspirations. Additionally, offering detailed career paths ensures that students receive comprehensive guidance throughout their educational journey, leading to better-informed decisions and increased likelihood of success in their chosen fields. This initiative not only benefits individual students but also contributes to societal advancement by fostering a more skilled and satisfied workforce. Therefore, addressing this problem is paramount in ensuring equitable access to opportunities and fostering a generation of confident and purpose-driven individuals ready to navigate the complexities of the modern world.

This project endeavors to empower secondary school students by offering comprehensive career counseling resources. By providing aptitude, domain, and personality tests alongside AI-based counseling, we aim to assist students in understanding their strengths and interests. Early access to these resources facilitates informed decision-making, enabling students to align their academic pursuits with their career aspirations. Ultimately, this initiative seeks to equip students with the tools needed to embark on fulfilling and successful career paths, contributing to their personal growth and societal advancement.

[Every student at secondary level espically children at rural areas]

## About the project
The AI-based career counseling project offers a comprehensive platform for users to navigate their professional journey effectively. Upon registration and login, users gain access to personalized career insights tailored to their unique strengths and interests. The frontend interface features intuitive charts illustrating various career paths, empowering users to explore and understand different domains. Users can then opt to undertake a series of assessments, including aptitude, academic, and personality tests, to assess their skills and preferences accurately. These test results, along with user credentials, are securely stored in the backend database. Leveraging machine learning algorithms, the system analyzes this data to recommend suitable courses and predict individual capabilities, aiding users in making informed career decisions. Through a seamless integration of frontend visualization, backend data management, and AI-driven analysis, the platform serves as a valuable tool for individuals seeking guidance in navigating their professional aspirations.

# Technical implemntaion 

1. Machine Learning Models:
   - Three separate models are trained for each profession using Naive Bayes classification algorithm.
   - Each model is trained on placeholder datasets containing aptitude scores, domain scores, extraversion, and conscientiousness levels as features, and the corresponding profession as the target variable.
   - Model accuracies are as follows:
     - Doctor Model: 89%
     - Engineer Model: 90%
     - Accountant Model: 80%

2. Flask Backend:
   - Flask is used to create APIs for handling user requests and serving predictions.
   - API endpoints are designed to receive user inputs, process them, and return predictions.
   - Flask allows seamless integration of machine learning models for real-time prediction serving.

3. User Interface (Client Side):
   - Users interact with the system through a user-friendly interface.
   - They can choose their desired profession and take tests to evaluate their aptitude, domain knowledge, extraversion, and conscientiousness.
   - Test results are sent to the backend for processing and prediction.

4. Prediction and Advice:
   - Once the user submits their test results, the backend processes the data using the appropriate machine learning model based on the chosen profession.
   - The model predicts the user's suitability for the selected profession based on their test scores.
   - Depending on the prediction, the system provides personalized advice to the user regarding their career choice.
   - Advice may include suggestions for further skill development, recommended career paths, or encouragement to pursue the chosen profession.

#Workflow:
1. User Selection:
   - User selects their desired profession (Doctor, Engineer, or Accountant) through the interface.

2. Test Participation:
   - User participates in tests to evaluate their aptitude, domain knowledge, extraversion, and conscientiousness.

3. Data Submission:
   - Test results are submitted to the backend via API endpoints.

4. Prediction:
   - Backend processes the submitted data using the corresponding machine learning model.
   - Model predicts the user's suitability for the chosen profession with the specified accuracy.

5. Advice Generation:
   - Based on the prediction, the system generates personalized advice for the user.
   - Advice is displayed to the user through the interface, providing guidance on their career choice.

6. Feedback Loop:
   - Users may use the provided advice to further refine their career goals or make informed decisions about their professional path.

#Conclusion:
- The system provides a seamless and intuitive platform for users to explore career options based on their strengths and preferences.
- By leveraging machine learning models with specified accuracies and Flask backend, it offers accurate predictions and personalized advice to users, facilitating informed career decision-making.

![FlowChart CareerX](https://github.com/Valan-Tamil-Dasan/Vashisht-CareerX/assets/115523703/2b00a5d3-7ae5-4701-b92a-80e025cb5877)



## Techstacks used 
`CSS` , `react` , `flask` , `ml` , `pandas` , `scikit-learn`

## How to run locally  
- clone the repo 
```
npm install
cd frontend
npm start
```
In the project directory, you can run:

### `npm start`

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# What's next ?
In our ongoing endeavor to enhance our AI-based career counseling project, we have successfully developed models for three domains, providing insights and guidance to users seeking career direction. These domains have been meticulously trained, achieving an accuracy rate of 80-90% in predictions. However, our commitment to excellence drives us to continuously improve. In the future, we aim to elevate our accuracy to 98-99% or higher, ensuring even more precise and reliable guidance for individuals navigating their career paths. Our roadmap includes rigorous updates, leveraging advancements in AI technology, and refining our algorithms to deliver unparalleled accuracy and effectiveness. Through these efforts, we are dedicated to empowering individuals with the insights they need to make informed career decisions, facilitating personal and professional growth in an ever-evolving landscape.

## Declaration
We confirm that the project showcased here was either developed entirely during the hackathon or underwent significant updates within the hackathon timeframe. We understand that if any plagiarism from online sources is detected, our project will be disqualified, and our participation in the hackathon will be revoked.
