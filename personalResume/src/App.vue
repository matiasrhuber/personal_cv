<template>
  <div id="app">
    <header>
      <h1>Matias Robles Huber</h1>
      <p>Email: <a href="mailto:matiasrhuber@gmail.com">matiasrhuber@gmail.com</a> | Phone: +49 15227670632</p>
      <p>Education    About   Work Experience   Skills & Languages    Personal Projects</p>
    </header>
    <section>
      <h2>Work Experience</h2>
      <ul>
        <li>
          <strong>Infineon</strong> <br />
          Intern & Working Student – Software Developer for MicDB Webapp (Jan. 2022 – Feb. 2024) <br />
          At Infineon, I am responsible for the maintenance and development of a VueJS frontend and NodeJS backend webapp. The backend is reponsible for communication with a MongoDB database. The webapp serves as a platform for customers and Infineon researchers to test different variations of
          <a href="https://www.infineon.com/cms/en/product/sensor/mems-microphones/">MEMS Microphones</a>. In addition to the Webapp project, I have also partook in the application of a voice recognition deep learning model, as well as 
          the development of a python-based webapp. The key libraries which were used in these projects include: Tkinter, Pandas, Pytorch, Mongoose, Nodemon.
        </li>
        <li>
          <strong>Siemens AG</strong> <br />
          Intern & Working Student – Data Scientist for the <a href="https://www.siemens-advanta.com/services/offers/ai-driven-pricing-analytics-optimization">Price Recommender Model</a> (Jan. 2022 – Feb. 2024) <br />
          At Siemens, I had my initial experience in a professional environment. I learnt a lot regarding the process of developing a machine learning project in a large company. The price recommender uses historical data, in order to provide
          an estimate of pricing for future projects, allowing sales reps to have a better informed decision when establishing the final price. A random forest algorithm was used, which was supplied data using containers in AWS. Initially I was tasked with data analysis
          and preprocessing, as each new country which was brought on, had varying methods to store data.<br />Over time I took on more responsibilities in development, my final project at Siemens was the creation of a new adjusted model for sales reps in the US. 
          The key libraries which were used in this project include: Sklearn, Pandas, Boto3, Pytorch, Numpy.
        </li>
      </ul>
    </section>

    <section>
      <h2>Education</h2>
      <ul>
        <li>
          <strong >Technical University of Munich</strong> <br />
          <a href="https://www.cit.tum.de/cit/studium/studiengaenge/master-elektrotechnik-informationstechnik/">M.Sc. Electrical & Computer Engineering </a>(Sep. 2023 –) <br />
          My Masters in electrical engineering has been an extremely freeing and, as consequence, extremely interesting experience. The liberty provided by the degree format allows one to choose subjects and spezializations which they find more interesting.
          In my case, these subjects include Signal Processing and Machine Learning, and Entrepreneurial Opportunities in 6G Communication Network Technologies. These subjects encompassed a lot of my main interests in academics, which are machine learning,
          and the development of new technologies.
        </li>
        <li>
          <strong>Technical University of Munich</strong> <br />
          <a href="https://www.cit.tum.de/cit/studium/studiengaenge/bachelor-elektrotechnik-informationstechnik/">B.Sc. Electrical & Computer Engineering </a>(Sep. 2020 – Mar. 2024) <br />
          I arrived in Munich as an international student, having had studied in Brazil and Qatar. The opportunity to study in German in a globally well renowned university was extremely compelling to me. 
          Having now completed the Bachelor, I feel my experience has been extremely influential on my person, it also aided termendously in my decision to specialize in Communication Engineering, and Robotics and Automatization in my Masters. Subjects which I partook,
          that I found were of particular interest, include Python for Engineering & Data Analysis, Introduction to Machine Learning, and Algorithms and Data Sctructures.
        </li>
        <li>
          <strong>Bachelor thesis – Grade: 1.7</strong> <br />
          My thesis encompassed the implementation of machine learning solutions for resource allocation within a LiFi system, with a focus on reinforcement learning. I developed a simulation of a hybrid Lifi WiFi network of moderate complexity, with four 
          access points. I established a control center modelled by a reinforcement learning algorithm, this allowed the system to perform handovers to reduce latency and avoid high demand on individual access points. The simulations aspect of the thesis helped 
          me develop my skills in object oriented programming, and the theoritical helped cement even more my understanding of machine learning. The key libraries which were used in this project include: Gym, Pandas, Numpy.
        </li>
      </ul>
    </section>

    <section>
      <h2>Skills & Languages</h2>
      <h3>Skills</h3>
      <p><strong>Python:</strong> Advanced</p>
      <p><strong>C++:</strong> Intermediate</p>
      <p><strong>Matlab:</strong> Intermediate</p>
      <p><strong>AWS:</strong> Basic</p>
      <p><strong>VueJS:</strong> Advanced</p>
      <p><strong>NodeJS:</strong> Advanced</p>
      <p><strong>Office:</strong> Advanced</p>

      <h3>Languages</h3>
      <p><strong>English:</strong> Native</p>
      <p><strong>Portuguese:</strong> Native</p>
      <p><strong>German:</strong> Fluent</p>
      <p><strong>Spanish:</strong> Fluent</p>
    </section>

    <section>
      <h2>Awards & Scholarships</h2>
      <ul>
        <li>Gold in the <a href="https://ukmt.org.uk/senior-challenges/senior-mathematical-challenge-awards">UKMT Senior Mathematical Challenge</a></li>
        <li>Bronze in National Qatar Math Olympiad</li>
        <li>Doha College Advanced Mathematics Award 2017</li>
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
  methods: {
    showInfo(type, event) {
      let descriptions = {
        python: "Experience with data analysis, ML, and automation using Pandas, Scikit-Learn, and TensorFlow.",
        algorithms: "Studied sorting, search trees, dynamic programming, and computational complexity.",
        thesis: "Developed an ML-based resource allocation system for LiFi networks, focusing on reinforcement learning."
      };
      this.tooltip.text = descriptions[type];
      this.tooltip.visible = true;
      this.tooltip.x = event.clientX + 10;
      this.tooltip.y = event.clientY + 10;
    },
    hideInfo() {
      this.tooltip.visible = false;
    }
  },
  priceRecommenderLink: "https://www.siemens-advanta.com/services/offers/ai-driven-pricing-analytics-optimization",
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
