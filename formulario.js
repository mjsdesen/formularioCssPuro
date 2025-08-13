function IsNum(v) {
  var ValidChars = "0123456789";
  var IsNumber = true;
  var Char;
  for (i = 0; i < v.length && IsNumber == true; i++) {
    Char = v.charAt(i);
    if (ValidChars.indexOf(Char) == -1) {
      IsNumber = false;
    }
  }
  return IsNumber;
}

function validaForm(form) {
  if (form.nome.value == "") {
    showModal("Por favor, preencha o campo de nome.");
    form.nome.focus();
    return false;
  }
  var filtro_mail = /^.+@.+\..{2,3}$/;
  if (!filtro_mail.test(form.email.value) || form.email.value == "") {
    showModal("Por favor, insira um endereço de e-mail válido.");
    form.email.focus();
    return false;
  }
  var data_nascimento_regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (
    form.data_nascimento.value == "" ||
    !data_nascimento_regex.test(form.data_nascimento.value)
  ) {
    showModal("Por favor, insira a data de nascimento no formato DD/MM/AAAA.");
    form.data_nascimento.focus();
    return false;
  }
  if (form.endereco.value == "" || form.endereco.value.length < 8) {
    showModal("Por favor, insira um endereço completo.");
    form.endereco.focus();
    return false;
  }
  if (form.uf.value == "") {
    showModal("Por favor, selecione um estado.");
    form.uf.focus();
    return false;
  }

  if (form.tel.value == "") {
    showModal("Por favor, insira um número de telefone.");
    form.tel.focus();
    return false;
  } else {
    if (!IsNum(form.tel.value)) {
      showModal("O campo de telefone só aceita números.");
      form.tel.focus();
      return false;
    }
  }
  if (form.senha.value == "" || form.senha.value.length < 6) {
    showModal("A senha deve ter pelo menos 6 caracteres.");
    form.senha.focus();
    return false;
  }
  if (form.conf_senha.value == "") {
    showModal("Por favor, confirme sua senha.");
    form.conf_senha.focus();
    return false;
  }
  if (form.senha.value != form.conf_senha.value) {
    showModal("A confirmação da senha não corresponde à senha.");
    form.conf_senha.focus();
    return false;
  }
  if (form.sexo[0].checked == false && form.sexo[1].checked == false) {
    showModal("Por favor, selecione o sexo.");
    return false;
  }
  if (!Array.from(form.interesses).some((checkbox) => checkbox.checked)) {
    showModal("Por favor, selecione pelo menos um interesse.");
    return false;
  }
  if (form.mensagem.value == "") {
    showModal("Por favor, insira uma mensagem.");
    return false;
  } else if (form.mensagem.value.length < 20) {
    showModal("A mensagem deve ter pelo menos 20 caracteres.");
    return false;
  }
  if(form.foto.value == "") {
    showModal("Por favor, insira um arquivo.");
    return false;
  }
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  if(!allowedExtensions.exec(form.foto.value)) {
    showModal("Por favor, insira apenas arquivos de imagem (JPG, JPEG, PNG ou GIF).");
    form.foto.value = '';
    return false;
  }
}

/* Função que exibe um modal com a mensagem passada como parâmetro */
function showModal(message) {
  /* Criar as variaveis e recupera os elementos do DOM */
  var overlay = document.getElementById("modal-overlay");
  var modalContent = document.getElementById("modal-content");
  var closeButton = document.getElementById("close-button");
  /* carrega a mensagem na variavel modalContent */
  modalContent.innerText = message;
  /* Exibe o modal */
  overlay.style.display = "block";
  /* Adiciona um evento de click no botão de fechar o modal */
  closeButton.onclick = function () {
    overlay.style.display = "none";
  };
}
