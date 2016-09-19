angular.module('RDash')
    .controller('ArrestedRegisterController', ['$scope', '$cookieStore', ArrestedRegisterController]);

function ArrestedRegisterController($scope, $cookieStore) {

    $scope.registroGeral = [];
    $scope.cpf = [];
    $scope.alcunha = [];
    $scope.telefone = [];
    $scope.celular = [];
    $scope.recolhimento = [];

    $scope.inputs = {rg: '', cpf: '', alcunha: '', telefone: '', celular: '', recolhimento: '', proibicao: '', dataInicio: '', dataFinal: ''};

    $scope.addRegistroGeral = function (registroGeral) {
        $scope.registroGeral.push({rg: registroGeral});
        $scope.inputs.rg = '';
    };

    $scope.removeRegistroGeral = function (index) {
        $scope.registroGeral.splice(index, 1);
    };

    $scope.addCpf = function (cpf) {
        $scope.cpf.push({cpf: cpf});
        $scope.inputs.cpf = '';
    };

    $scope.removeCpf = function (index) {
        $scope.cpf.splice(index, 1);
    };

    $scope.addAlcunha = function (alcunha) {
        $scope.alcunha.push({alcunha: alcunha});
        $scope.inputs.alcunha = '';
    };

    $scope.removeAlcunha = function (index) {
        $scope.alcunha.splice(index, 1);
    };

    $scope.addTelefone = function (telefone) {
        $scope.telefone.push({telefone: telefone});
        $scope.inputs.telefone = '';
    };

    $scope.removeTelefone = function (index) {
        $scope.telefone.splice(index, 1);
    };
    $scope.addCelular = function (celular) {
        $scope.celular.push({celular: celular});
        $scope.inputs.celular = '';
    };

    $scope.removeCelular = function (index) {
        $scope.celular.splice(index, 1);
    };

    $scope.addRecolhimento = function (recolhimento, proibicao, dataInicio, dataFinal) {
        $scope.recolhimento.push({recolhimento: recolhimento, proibicao: proibicao, dataInicio: dataInicio, dataFinal: dataFinal});
        $scope.inputs.recolhimento = '';
        $scope.inputs.proibicao = '';
        $scope.inputs.dataInicio = '';
        $scope.inputs.dataFinal = '';
    };
    
    $scope.removeRecolhimento = function (index) {
        $scope.recolhimento.splice(index, 1);
    };
}

//Foto do perfil do detento no cadastro do detento.
//Icones nas lista ao invés do nome da ação.
//Relatorio do detento.

