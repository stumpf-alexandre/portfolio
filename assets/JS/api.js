async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/stumpf-alexandre/portfolio/refs/heads/main/data/profile.json'

    const fetching = await fetch(url)

    return fetching.json()
}