const celsiusBtn = document.getElementById('celsius');
    const fahrenheitBtn = document.getElementById('fahrenheit');
    
    celsiusBtn.addEventListener('click', () => {
      celsiusBtn.classList.add('active');
      fahrenheitBtn.classList.remove('active');
      // Add your temperature conversion logic here
    });
    
    fahrenheitBtn.addEventListener('click', () => {
      fahrenheitBtn.classList.add('active');
      celsiusBtn.classList.remove('active');
      // Add your temperature conversion logic here
    });

    const weatherData = [
        { time: 'Now', icon: '☀️', description: 'Sunny', temp: '18°' },
        { time: '1 PM', icon: '☀️', description: 'Sunny', temp: '19°' },
        { time: '2 PM', icon: '⛅', description: 'Partly Cloudy', temp: '20°' },
        { time: '3 PM', icon: '⛅', description: 'Partly Cloudy', temp: '21°' },
        { time: '4 PM', icon: '⛅', description: 'Partly Cloudy', temp: '20°' },
        { time: '5 PM', icon: '🌥️', description: 'Cloudy', temp: '19°' },
        { time: '6 PM', icon: '🌥️', description: 'Cloudy', temp: '18°' },
        { time: '7 PM', icon: '🌥️', description: 'Cloudy', temp: '17°' },
        { time: '8 PM', icon: '🌙', description: 'Clear', temp: '16°' },
        { time: '9 PM', icon: '🌙', description: 'Clear', temp: '15°' },
        { time: '10 PM', icon: '🌙', description: 'Clear', temp: '14°' },
        { time: '11 PM', icon: '🌙', description: 'Clear', temp: '13°' }
    ];

    const cardContainer = document.getElementById('cardContainer');
    for (let i = 0; i < 12; i++) {
        const data = weatherData[i] || { time: 'Now', icon: '', description: 'text', temp: '18°' };
        
        const card = document.createElement('div');
        card.className = 'text-center w-6 h-auto';
        card.innerHTML = `
            <p class="text-gray-300 text-nowrap">${data.time}</p>
            <div class="text-2xl my-2">${data.icon}</div>
            <p class="text-gray-300  text-wrap">${data.description}</p>
            <p class="font-bold">${data.temp}</p>
        `;
        
        cardContainer.appendChild(card);
    }

    const weekData = [
        {day:"Today",icon: "⛅",maxTemp:"18°",minTemp:"15°"},
        {day:"Fri",icon: "🌙",maxTemp:"32°",minTemp:"25°"},
        {day:"Sat",icon: "☀️",maxTemp:"30°",minTemp:"19°"},
        {day:"Sun",icon: "🌥️",maxTemp:"28°",minTemp:"23°"},
        {day:"Mon",icon: "🌙",maxTemp:"23°",minTemp:"15°"},
        {day:"Tue",icon: "🌥️",maxTemp:"30°",minTemp:"20°"},
        {day:"Wed",icon: "☀️",maxTemp:"20°",minTemp:"18°"},
    ]
    const weekContainer = document.getElementById('weekContainer');
    for (let i = 0; i < 7; i++) {
        const data = weekData[i] || { day: 'Now', icon: '', maxTemp: 'text', minTemp: '18°' };
        
        const week = document.createElement('div');
        week.className = 'flex flex-col w-full';
        week.innerHTML = `
            <div class="flex items-center justify-between py-4 px-2">
            <p class="font-bold">${data.day}</p>
            <div class="text-2xl">${data.icon}</div>
            <div class="flex space-x-5">
                <p class="font-bold">${data.maxTemp}</p>
                <p class="font-bold text-gray-400">${data.minTemp}</p>
            </div>
        </div>
        <hr class="border-gray-200 border-t w-full"/>            
        `;
        
        weekContainer.appendChild(week);
    }
