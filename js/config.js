/*
 * Nuvia Player — configuração do site
 * ------------------------------------------------------------
 * Preencha UM dos canais de contato abaixo. O botão
 * "Solicitar demonstração" usa o primeiro canal preenchido,
 * nesta ordem: url → whatsapp → email.
 *
 * Enquanto todos estiverem vazios, o botão mostra um aviso
 * de que o contato comercial ainda não foi configurado.
 */
window.NUVIA_CONFIG = {
  // Link externo do painel de controle (botões "Acessar painel").
  // Ex.: "https://painel.seudominio.com.br"
  painel: {
    url: ""
  },

  contato: {
    // Link de formulário, agenda ou página de contato. Ex.: "https://..."
    url: "",

    // Somente números, com DDI e DDD. Ex.: "5500000000000"
    whatsapp: "",

    // E-mail comercial. Ex.: "comercial@seudominio.com.br"
    email: "",

    // Mensagem inicial usada no WhatsApp e no assunto do e-mail
    mensagem: "Olá! Gostaria de solicitar uma demonstração da Nuvia Player."
  }
};
