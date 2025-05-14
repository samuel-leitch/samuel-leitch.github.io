
function populateTimeline() {
    fetch("..//data//timeline.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const timelineDiv = document.getElementById("timeline");
            data.events.forEach(entry => {
                timelineDiv.innerHTML += `
                    <div class="flex items-stretch mb-3 md:mb-6">
                        <!-- Date -->
                        <div class="w-20 text-right pt-1">
                            <p class="font-semibold text-md md:text-lg text-amber-800">${entry.date}</p>
                        </div>

                        <!-- Line -->
                        <div class="flex items-stretch px-2">
                            <div class="w-px bg-amber-800"></div>
                        </div>

                        <!-- Content -->
                        <div class="flex-1">
                            <p class="text-gray-800 text-md md:text-lg">${entry.content}</p>
                        </div>
                    </div>
                `;
            })
        })
}

document.addEventListener("DOMContentLoaded", (event) => {
    populateTimeline();
})