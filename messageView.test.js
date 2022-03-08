/**
 * @jest-environment jsdom
 */

const { it } = require('@jest/globals');
const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const inputEl = document.querySelector('#message-input')
    inputEl.value = "Hello, we are inputting messages"
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const message = document.querySelector('#message')


    expect(message.innerText).toEqual("Hello, we are inputting messages");
  });

  
  // it('hides the message', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');
  //   const view = new MessageView();

  //   const buttonEl = document.querySelector('#show-message-button');
  //   buttonEl.click();
    
  //   const buttonEl2 = document.querySelector('#hide-message-button');
  //   buttonEl2.click();
  //   expect(document.querySelector('#message')).toBeNull();
  // });
});