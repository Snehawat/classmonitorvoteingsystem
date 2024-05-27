
    document.addEventListener('DOMContentLoaded', function() {
        const votingForm = document.getElementById('votingForm');
        const studentNameInput = document.getElementById('studentName');
        const monitorChoiceSelect = document.getElementById('monitorChoice');
      
        const snehaVotesElement = document.getElementById('snehaVotes');
        const radhaVotesElement = document.getElementById('radhaVotes');
        const saviVotesElement = document.getElementById('saviVotes');
        const totalVotesElement = document.getElementById('totalVotes');
      
        const snehaVotersList = document.getElementById('snehaVoters');
        const radhaVotersList = document.getElementById('radhaVoters');
        const saviVotersList = document.getElementById('saviVoters');
      
        let votes = {
          sneha: 0,
          radha: 0,
          savi: 0
        };
      
        let totalVotes = 0;
        let voters = {
          sneha: [],
          radha: [],
          savi: []
        };
      
        function updateResults() {
          snehaVotesElement.textContent = votes.sneha;
          radhaVotesElement.textContent = votes.radha;
          saviVotesElement.textContent = votes.savi;
          totalVotesElement.textContent = totalVotes;
        }
      
        function addVoterToList(monitor, studentName) {
          const listItem = document.createElement('li');
          listItem.textContent = studentName;
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', () => deleteVoter(monitor, studentName, listItem));
          listItem.appendChild(deleteButton);
      
          if (monitor === 'sneha') {
            snehaVotersList.appendChild(listItem);
          } else if (monitor === 'radha') {
            radhaVotersList.appendChild(listItem);
          } else if (monitor === 'savi') {
            saviVotersList.appendChild(listItem);
          }
      
          voters[monitor].push(studentName);
        }
      
        function deleteVoter(monitor, studentName, listItem) {
          votes[monitor]--;
          totalVotes--;
          updateResults();
          listItem.remove();
          voters[monitor] = voters[monitor].filter(voter => voter !== studentName);
        }
      
        votingForm.addEventListener('submit', function(event) {
          event.preventDefault();
      
          const studentName = studentNameInput.value.trim();
          const monitorChoice = monitorChoiceSelect.value;
      
          if (studentName && monitorChoice) {
            votes[monitorChoice]++;
            totalVotes++;
            updateResults();
            addVoterToList(monitorChoice, studentName);
      
            // Clear the form
            studentNameInput.value = '';
            monitorChoiceSelect.value = 'sneha';
          }
        });
      });
      
  