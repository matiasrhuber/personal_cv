<template>
  <div id="app">
    <header>
      <h1>Matias Robles Huber</h1>
      <p>Email: <a href="mailto:matiasrhuber@gmail.com">matiasrhuber@gmail.com</a> | Phone: +49 15227670632</p>
      <p>Education    About   Work Experience   Skills & Languages    Personal Projects</p>
    </header>

    <section>
      <h2>Education</h2>
      <ul>
        <li>
          <strong>Technical University of Munich</strong> <br />
          M.Sc. Electrical & Computer Engineering (Sep. 2023 –) <br />
          Specialization: Communication Engineering
        </li>
        <li>
          <strong>Technical University of Munich</strong> <br />
          B.Sc. Electrical & Computer Engineering (Sep. 2020 – Mar. 2024) <br />
          Relevant Coursework: Algorithms & Data Structures, Python for Engineering & Data Analysis, Introduction to Machine Learning
        </li>
        <li>
          <strong>Bachelor thesis – Grade: 1.7</strong> <br />
          Topic: Implementation of machine learning solutions for resource allocation within a LiFi system, with a focus on reinforcement learning (Apr. 2023 – Sep. 2023)
        </li>
      </ul>
    </section>

    <section>
      <h2>Work Experience</h2>
      <ul>
        <li>
          <strong>Siemens AG</strong> <br />
          Intern & Working Student – Development of Price Recommender model (Jan. 2022 – Feb. 2024) <br />
          Responsibilities:
          <ul>
            <li>Data analysis and preprocessing of raw data</li>
            <li>Developed machine learning-based random forest models</li>
            <li>Maintained models and managed AWS servers</li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <h2>Skills & Languages</h2>
      <p><strong>Python:</strong> Advanced</p>
      <p><strong>C++:</strong> Intermediate</p>
      <p><strong>Matlab:</strong> Intermediate</p>
      <p><strong>AWS:</strong> Intermediate</p>

      <h3>Languages</h3>
      <p><strong>English:</strong> Native</p>
      <p><strong>Portuguese:</strong> Native</p>
      <p><strong>German:</strong> Fluent</p>
      <p><strong>Spanish:</strong> Fluent</p>
    </section>

    <section>
      <h2>Awards & Scholarships</h2>
      <ul>
        <li>Gold in the UKMT Senior Mathematical Challenge</li>
        <li>Bronze in National Qatar Math Olympiad</li>
        <li>Advanced Mathematics Award 2017</li>
      </ul>
    </section>

    <section>
      <h2>Personal Projects</h2>
      <p><strong>SEC Webscraper:</strong> A web scraper for stock data from the US stock market using a MongoDB server for storage.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 0.2em;
}

section {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
