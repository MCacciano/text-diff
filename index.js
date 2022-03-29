const inputOne = document.querySelector('#input-1');
const inputTwo = document.querySelector('#input-2');

const displayOne = document.querySelector('#display-1');
const displayTwo = document.querySelector('#display-2');

const valueOne = inputOne.textContent;
const valueTwo = inputTwo.textContent;

displayOne.innerHTML = valueOne;

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque possimus enim ex praesentium, sequi eos corrupti nisi unde eius expedita magni iure repudiandae incidunt ad rerum reiciendis ratione dicta aliquid laborum! Amet labore placeat perspiciatis! Animi iusto facilis reiciendis expedita id quibusdam reprehenderit et quidem nostrum porro? Aut, suscipit?

inputTwo.addEventListener('keyup', function (e) {
  const charArr = e.target.value.split('');
  let text = '';

  console.log('text', valueOne);
  console.log(valueOne.trim().split('\n'));

  charArr.forEach(function (char, i) {
    if (char !== valueOne.trim().charAt(i)) {
      text += `<span class="highlight">${char}</span>`;
    } else {
      text += char;
    }
  });

  displayTwo.innerHTML = text;
});
