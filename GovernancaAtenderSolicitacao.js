function goToAndFinalPage(value){
  goToPage = value;
  finalPage = 26; //pagina de atendimento.
}
if (continueClicked && currentPage == goToPage) {
  goToPage = 26;
}



if(runOnce){

  
  

for(var i=0; i<users.length; i++){
  if(currentUser == users[i].id){
    data.txtNOMECOMPLETO = `${users[i].firstName} ${users[i].lastName}`
    data.txtEMAIL = users[i].email
    break;
  }   
}
 showUploadedFiles = true; // mostras os arquivos que foram anexados.
  
  data.txaCONFIRMAR_ATENDIMENTO_DESCRICAO = data.txaATENDER_SOLICITACAO_DESCRICAO;
  
  if(data.txaCONFIRMAR_DESCRICAO_NAO_ATENDIDO != null || data.txaCONFIRMAR_DESCRICAO_NAO_ATENDIDO != undefined || data.txaCONFIRMAR_DESCRICAO_NAO_ATENDIDO != ""){
    data.txaDEVOLUCAO_CONFIRMAR_ATENDER_GOVERNANCA = data.txaCONFIRMAR_DESCRICAO_NAO_ATENDIDO
  }
}

// Code to run on the first page
if(continueClicked && currentPage == 1){
  
    switch (data.sltSELECT_CATEGORIA2) {
      case "Nacional - Termo confissão de dívida - Fornecedor":
        goToAndFinalPage(2);
        break;

      case "Internacional - Termo de confissão de dívida - Fornecedor":
        goToAndFinalPage(3);
        break;

      case "Análise de licitação":
        goToAndFinalPage(4);
        break;

      case "Nacional - Análise e elaboração de contrato de Cliente":
        goToAndFinalPage(5);
        break;

      case "Nacional - Análise e elaboração de contrato de Fornecedor":
        goToAndFinalPage(6);
        break;

      case "Nacional - Análise e elaboração de contrato de Pessoa Jurídica":
        goToAndFinalPage(7);
        break;

      case "Internacional - Análise e elaboração de contrato de Cliente":
        goToAndFinalPage(8);
        break;

      case "Internacional - Análise e elaboração de contrato de Fornecedor":
        goToAndFinalPage(9);
        break;

      case "Internacional - Análise e elaboração de contrato de Pessoa Jurídica":
        goToAndFinalPage(10);
        break;
    
      case "Nacional - Distrato de contrato - Cliente":
        goToAndFinalPage(11);
        break;
    
      case "Nacional - Distrato de contrato - Fornecedor":
        goToAndFinalPage(12);
        break;
    
      case "Internacional - Distrato de contrato - Cliente":
        goToAndFinalPage(13);
        break;
    
      case "Internacional - Distrato de contrato - Fornecedor":
        goToAndFinalPage(14);
        break;
    
      case "Elaboração de NDA - Nacional":
        goToAndFinalPage(15);
        break;
    
      case "Elaboração de NDA - Internacional":
        goToAndFinalPage(16);
        break;
    
      case "Nacional - Solicitação de documentação solidária":
        goToAndFinalPage(17);
        break;
    
      case "Nacional - Assinatura de declarações":
        goToAndFinalPage(18);
        break;
    
      case "Nacional - Resposta de questionários":
        goToAndFinalPage(19);
        break;
    
      case "Nacional - Solicitação de documentos":
        goToAndFinalPage(20);
        break;
    
      case "Nacional - Solicitação de modelo":
        goToAndFinalPage(21);
        break;
    
      case "Internacional - Solicitação de documentação solidária":
        goToAndFinalPage(22);
        break;
    
      case "Internacional - Resposta de questionários":
        goToAndFinalPage(23);
        break;
    
      case "Internacional - Solicitação de Documentos":
        goToAndFinalPage(24);
        break;
    
      case "Internacional - Solicitação de modelo":
        goToAndFinalPage(25);
        break;
        

    }
}

// Code to run on the second page
if(continueClicked && currentPage == 2){



}

// Code to run after submit is clicked
if(submitting){



}