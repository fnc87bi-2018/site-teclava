
const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.links');
if(toggle&&links){toggle.addEventListener('click',()=>links.classList.toggle('open'))}
document.querySelectorAll('[data-budget-form]').forEach(form=>form.addEventListener('submit',e=>{
 e.preventDefault(); const d=new FormData(form);
 const msg=`Olá! Gostaria de solicitar um orçamento.%0A%0ANome: ${encodeURIComponent(d.get('nome')||'')}%0AEletrodoméstico: ${encodeURIComponent(d.get('equipamento')||'')}%0AMarca: ${encodeURIComponent(d.get('marca')||'')}%0ADescrição: ${encodeURIComponent(d.get('mensagem')||'')}`;
 window.open('https://wa.me/5551991722935?text='+msg,'_blank');
}));
