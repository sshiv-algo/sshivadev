const terminalPopup = document.getElementById('terminal-popup');
const openTerminal = document.getElementById('open-terminal');
const closeTerminal = document.getElementById('close-terminal');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
const terminalBody = document.getElementById('terminal-body');

let hasOpenedOnce = false; // Flag to avoid repeating welcome message

// Show terminal
openTerminal.addEventListener('click', () => {
  terminalPopup.style.display = 'block';
  terminalInput.focus();

  if (!hasOpenedOnce) {
    showWelcomeMessage();
    hasOpenedOnce = true;
  }
});

// Hide terminal
closeTerminal.addEventListener('click', () => {
  terminalPopup.style.display = 'none';
  terminalOutput.innerHTML = ''; // Clear on close
  hasOpenedOnce = false; // Reset welcome flag for next open
});

// Command handler
terminalInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const input = terminalInput.value.trim();
    terminalOutput.innerHTML += `<div class="terminal-line"><span class="prompt">epic@portfolio:~$</span> ${input}</div>`;
    handleCommand(input);
    terminalInput.value = '';
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
});

function handleCommand(cmd) {
  let output = '';
  switch (cmd.toLowerCase()) {
    case 'help':
      output = 'Available commands: <span class="cmd">help</span>, <span class="cmd">whoami</span>, <span class="cmd">about</span>,  <span class="cmd">projects</span>,  <span class="cmd">skills</span>, <span class="cmd">contact</span>, <span class="cmd">sudo</span>, <span class="cmd">clear</span>';
      break;
    case 'whoami':
      output = 'Hi, I’m <strong>Sivadev Sunil</strong>. A passionate Developer and Tech Enthusiast  who also have strong intrest in Cybersecurity. I focus on building clean, reliable software and continuously learning to stay sharp in a fast-changing field of technology and innovation..<br>Welcome to my interactive terminal!';
      break;
    case 'about':
      output = 'Name: Sivadev S.S <br>Date of birth: October 02, 2005<br>Address: Kerala, India<br>Email: ssh.shivadev@protonmail.com<br>Phone: +91 7356293466';
      break;
    case 'project':
      output = 'Onnum Ayilla bro ;(';
      break;
    case 'contact':
      output = `
          GitHub     : https://github.com/sshiv-algo
          LinkedIn   : https://linkedin.com/in/yourusername
          Twitter    : https://x.com/shivvz_
          Instagram  : https://instagram.com/shivadev.sunil_
          Email      : ssh.shivadev@protonmail.com`;
  break;

    case 'skills':
      output = 'I have a strong foundation in web development, with hands-on experience in HTML, CSS, JavaScript, and PHP. I am also proficient in C++, Python, and SQL, with a good understanding of data structures and algorithms. Im comfortable working with Linux, using tools like Git, VS Code, and MySQL. My skill set also includes API integration, responsive design, and basic cybersecurity concepts. Currently, I am exploring AI/ML, ethical hacking, and DevOps practices.';
      break;
    case 'sudo':
  output = `<div>[sudo] password for user: ******</div><div>Permission denied. You are not allowed to use sudo. Poda Kunne!</div><br/>${output}`;
  break;

    case 'clear':
      terminalOutput.innerHTML = '';
      return;
    default:
      output = `'${cmd}' is not recognized as a command. Type <span class="cmd">help</span> to see available commands.`;
  }

  terminalOutput.innerHTML += `<div class="terminal-line">${output}</div>`;
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function showWelcomeMessage() {
  const welcomeText = `
    <div class="terminal-line">Welcome to My Portfolio Terminal</span></div>
    <div class="terminal-line">--------------------------------------------------</div>
  `;
  terminalOutput.innerHTML += welcomeText;
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function appendOutput(content) {
  const outputDiv = document.getElementById('terminalOutput');
  const newLine = document.createElement('div');
  newLine.innerHTML = content;
  outputDiv.appendChild(newLine);

  // Scroll to bottom on new output
  outputDiv.scrollTop = outputDiv.scrollHeight;
}
