import Actv from './Actv';
import { ActvList } from './interfaces';
import { Activity } from './interfaces';

export let actvList: ActvList = {};
const actvsToRepeat = createBase();

function createBase(): Activity[] {
  let actvs = [];
  for (let c = 0; c < 6; c++) {
    actvs.push(new Actv());
  }
  return actvs;
}

/* 
Define-se para desenvolvimento, não produção:

- Existem registros para 2 meses de 31 dias

- Seis atividades são geradas uma vez e repetidas em todos dias. Apesar de que o tempo e cor de cada actv é aleatoriamente definido em sua geração.

- A data corrente é 31 do segundo mês. 

- Alterar e deletar só é autorizado em actvs do dia atual
*/

// TODO: se tu quiser, da para fazer cada mês com a quantia certa de dias. Inclusive usando Date() para o contador saber quantos dias fazer e em que ponto da contagem aumentar o mês. Tudo em um só repetidor.

for (let c = 1; c <= 31; c++) {
  let padded = c.toString().padStart(2, '0');
  actvList[`${padded}/01/2022`] = actvsToRepeat;
}

for (let i = 1; i <= 31; i++) {
  let padded = i.toString().padStart(2, '0');
  actvList[`${padded}/02/2022`] = actvsToRepeat;
}
