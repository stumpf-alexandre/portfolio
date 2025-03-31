function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job
    job.href = profileData.linkedin
    job.target = '_blank'

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    location.href = profileData.pin
    location.target = '_blank'

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`
    phone.target = '_blank'

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
    email.target = '_blank'
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="Imagem do ${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
})()