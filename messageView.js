class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonEl2 = document.querySelector('#hide-message-button');
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.buttonEl2.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
    let div = document.createElement('div');
    div.setAttribute('id', 'message')
    div.innerText = 'This is a message displayed by JavaScript';
    this.mainContainerEl.append(div);
    console.log('Thanks for clicking me!');

  }
  
  
  hideMessage() {
    let div = document.getElementById('message');
    div.remove();
  }
}

module.exports = MessageView;