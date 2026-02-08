(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();function d(){const t=document.getElementById("email-input").value;t&&(document.getElementById("email").value=t),document.getElementById("briefModal").classList.add("active"),document.body.style.overflow="hidden"}function i(){document.getElementById("briefModal").classList.remove("active"),document.body.style.overflow="auto"}function u(t){t.preventDefault();const o={company:document.getElementById("company").value,industry:document.getElementById("industry").value,challenge:document.getElementById("challenge").value,budget:document.getElementById("budget").value,email:document.getElementById("email").value};alert(`Спасибо за заявку!

ИИ-система анализирует ваши данные:
- Компания: ${o.company}
- Отрасль: ${o.industry}

Инструкции для доступа отправлены на ${o.email}

В личном кабинете вы получите:
✓ Первичную диагностику текущей ситуации
✓ Определение зон роста и барьеров
✓ Релевантную стратегию развития
✓ Доступ к коллекции промптов
✓ Персональный дашборд с метриками`),i(),document.getElementById("briefForm").reset()}document.getElementById("briefModal").addEventListener("click",function(t){t.target===this&&i()});document.addEventListener("keydown",function(t){t.key==="Escape"&&i()});document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(o){o.preventDefault();const r=document.querySelector(this.getAttribute("href"));r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});window.openModal=d;window.closeModal=i;window.submitBrief=u;
