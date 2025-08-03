function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo');
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById('profile.name');
  name.innerText = profileData.name;

  const job = document.getElementById('profile.job');
  job.innerText = profileData.job;
  job.href = profileData.linkedin;
  job.target = '_blank';

  const location = document.getElementById('profile.location');
  location.innerText = profileData.location;
  location.href = profileData.pin;
  location.target = '_blank';

  const phone = document.getElementById('profile.phone');
  phone.innerText = profileData.phoneOptimized;
  phone.href = `https://api.whatsapp.com/send?phone=${profileData.phone}&text=Olá,%20me%20interessei%20no%20seu%20currículo!`;
  phone.target = '_blank';

  const email = document.getElementById('profile.email');
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
  email.target = '_blank';
}

function updateTypeHardSkills(profileData) {
  const typeHardSkills = document.getElementById('profile.skills.typeHardSkills');
  typeHardSkills.innerHTML = profileData.skills.hardSkills.front-end.map((skill) => `<h4 class="listHardSkills">Front-end</h4>`).join('');
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById('profile.skills.hardSkills');
  hardSkills.innerHTML = profileData.skills.hardSkills.front-end.map((skill) => `<li class="listHardSkills"><img src="${skill.logo}" alt="Imagem do ${skill.name}" title="${skill.name}"></li>`).join('');
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById('profile.skills.softSkills');
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li class="listSoftSkills">${skill}</li>`)
    .join('');
}

function updateLanguages(profileData) {
  const languages = document.getElementById('profile.languages');
  languages.innerHTML = profileData.languages
    .map(
      (language) =>
        `<li class="listLanguage ${language.class}">${language.name}</li>`,
    )
    .join('');
}

function updateProjects(profileData) {
  const projects = document.getElementById('profile.projects');
  projects.innerHTML = profileData.projects
    .map((project) => {
      return `<li class="listProjects">
                    <h3>${project.name}</h3>
                    ${
                      project.github
                        ? '<a class="github" href="' +
                          project.urlGit +
                          '" target="_blank">Visitar Código</a>'
                        : ''
                    }
                    ${
                      project.githubPage
                        ? '<a class="githubPage" href="' +
                          project.urlPage +
                          '" target="_blank">Visitar Site</a>'
                        : ''
                    }
                    ${
                      project.github ? '<p>' + project.description + '</p>' : ''
                    }
                </li>
                `;
    })
    .join('');
}

function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById(
    'profile.professionalExperience',
  );
  professionalExperience.innerHTML = profileData.professionalExperience
    .map((experience) => {
      return `<li class="listProfessionalExperience">
                    <h3 class="title">${experience.name}</h3>
                    <p class="period">${experience.period}</p>
                    <h4>Experiência Adquirida</h4>
                    <p class="description">${experience.description}</p>
                </li>
                `;
    })
    .join('');
}

function updateFooter(profileData) {
  const footers = document.getElementById('profile.footer');
  footers.innerHTML = profileData.footers
    .map((footer) => {
      return `
                <li class="listFooter ${footer.name}">
                    <a href="${footer.src}" target="_blank">
                        <img class="${footer.name}" src="./assets/icons/${footer.name}.svg" alt="Icone do ${footer.name}"  title="${footer.name}">
                    </a>
                </li>
                `;
    })
    .join('');
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateTypeHardSkills(profileData);
  updateHardSkills(profileData);
  updateSoftSkills(profileData);
  updateLanguages(profileData);
  updateProjects(profileData);
  updateProfessionalExperience(profileData);
  updateFooter(profileData);
})();
