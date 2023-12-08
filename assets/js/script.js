if (localStorage.getItem("temaEsc") == 'escuro') {
  document.querySelector('html').classList.add('dark-mode')
} else {
  document.querySelector('html').classList.remove('dark-mode')
}

function escolherIdioma(id) {
  var body = document.querySelector('body');
  if (body.id == 'index') {
    if (id == 'portugues') {
      window.location = 'assets/html/homeBR.html'
    } else {
      window.location = 'assets/html/homeEN.html'
    }
  } else if (body.id == 'home') {
    if (id == 'portugues') {
      window.location = 'homeBR.html'
    } else {
      window.location = 'homeEN.html'
    }
  } else if (body.id == 'desmatamento') {
    if (id == 'portugues') {
      window.location = 'desmatamentoBR.html'
    } else {
      window.location = 'desmatamentoEN.html'
    }
  } else if (body.id == 'noticias') {
    if (id == 'portugues') {
      window.location = 'noticiasBR.html'
    } else {
      window.location = 'noticiasEN.html'
    }
  } else if (body.id == 'mapa') {
    if (id == 'portugues') {
      window.location = 'mapaBR.html'
    } else {
      window.location = 'mapaEN.html'
    }
  } else if (body.id == 'sobre') {
    if (id == 'portugues') {
      window.location = 'sobreBR.html'
    } else {
      window.location = 'sobreEN.html'
    }
  } else if (body.id == 'contato') {
    if (id == 'portugues') {
      window.location = 'contatoBR.html'
    } else {
      window.location = 'contatoEN.html'
    }
  }
}

function config() {
  document.querySelector('.config').classList.toggle('ativa')
  var icon = document.querySelector('.material-symbols-outlined')
  if (icon.innerHTML == 'menu') {
    icon.innerHTML = 'close'
  } else {
    icon.innerHTML = 'menu'
    document.querySelector(`.idioma`).classList.remove('ativa')
    document.querySelector(`.tema`).classList.remove('ativa')
  }
}

function escolha(id) {
  if (id == 'idioma') {
    document.querySelector(`.${id}`).classList.toggle('ativa')
    document.querySelector(`.tema`).classList.remove('ativa')
  } else {
    document.querySelector(`.${id}`).classList.toggle('ativa')
    document.querySelector(`.idioma`).classList.remove('ativa')
  }
}

function mudarTema(id) {
  localStorage.setItem('temaEsc', id)
  if (id == 'escuro') {
    document.querySelector('html').classList.add('dark-mode')
  } else {
    document.querySelector('html').classList.remove('dark-mode')
  }
}

function conteudoNoticias(id) {
  document.querySelector('#conteudo0'+id).classList.add('ativaConteudoNoticias')
}

function fecharConteudoNoticias(id) {
  document.querySelector('#conteudo0'+id).classList.remove('ativaConteudoNoticias')
}