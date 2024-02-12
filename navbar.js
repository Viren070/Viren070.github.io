function loadNavbar() {
    const navbar = `
    <div class="navbar">
        <a href="../">Home</a>
        <div class="dropdown">
            <a href="#">Projects</a>
            <div class="dropdown-content">
                <a href="/Illusion/">Optical Illusion</a>
                <a href="/Emulator_Manager/">Emulator Manager</a>
                <a href="/My-Singing-Monsters-Tools/">My Singing Monsters Tools</a>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbar);
}

loadNavbar();