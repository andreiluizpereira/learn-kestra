(function () {
  'use strict';

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    return Promise.resolve();
  }

  document.querySelectorAll('[data-copy-target]').forEach(function (button) {
    button.addEventListener('click', function () {
      var target = document.querySelector(button.dataset.copyTarget);
      if (!target) {
        return;
      }

      copyText(target.textContent).then(function () {
        var originalLabel = button.textContent;
        button.textContent = 'Copiado';
        window.setTimeout(function () {
          button.textContent = originalLabel;
        }, 1600);
      });
    });
  });

  document.querySelectorAll('[data-quiz]').forEach(function (quiz) {
    var options = quiz.querySelectorAll('[data-answer]');
    var feedback = quiz.querySelector('[data-feedback]');

    options.forEach(function (option) {
      option.addEventListener('click', function () {
        options.forEach(function (item) {
          item.classList.remove('is-correct', 'is-wrong');
          item.disabled = true;
        });

        var isCorrect = option.dataset.answer === 'correct';
        option.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
        feedback.textContent = isCorrect
          ? option.dataset.feedback
          : option.dataset.feedback + ' Releia o trecho sobre o contrato e tente explicar a decisao em voz alta.';
        feedback.classList.add('is-visible');
      });
    });
  });
})();
