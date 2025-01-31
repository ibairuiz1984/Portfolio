var enIngles = false; // Variable para rastrear el estado del idioma

function traducir() {
  var p01 = document.getElementById("p01");
  var p02 = document.getElementById("p02");

  if (!enIngles) {
    // Traducir al inglés
    p01.innerHTML =
      "I am Ibai Ruiz Bretos, a Full Stack Developer. I have experience with Java, C#, JavaScript, Python, and Kotlin, as well as expertise in technologies like ASP.NET Core, Unity 3D, and Android Studio. I have worked on web development projects, cross-platform applications, and video games, combining creativity with technical skills.";
    p02.innerHTML =
      "I am passionate about learning and adapting to new technologies. My goal is to contribute innovative solutions and continue growing as a developer in challenging projects.";

    document.getElementById("tra").innerText = "Traducir"; // Cambia el texto del botón
    } else {
    // Traducir al español
    p01.innerHTML =
      "Soy Ibai Ruiz Bretos, desarrollador Full Stack. Cuento con experiencia con Java, C#, JavaScript, Python y Kotlin, además de dominar tecnologías como ASP.NET Core, Unity 3D y Android Studio. He trabajado en proyectos de desarrollo web, aplicaciones multiplataforma y videojuegos, combinando creatividad y habilidades técnicas.";
    p02.innerHTML =
      "Me apasiona aprender y adaptarme a nuevas tecnologías. Mi objetivo es aportar soluciones innovadoras y seguir creciendo como programador en proyectos desafiantes.";

      document.getElementById("tra").innerText = "Translate"; // Cambia el texto del botón
  }

  enIngles = !enIngles; // Cambiar estado
}
