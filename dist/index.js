import{S as m,i as u}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="50806139-f783558adc167f8e9c7c3d5e1",h="https://pixabay.com/api/";function g(r){const o=new URLSearchParams({key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20});return fetch(`${h}?${o}`).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}function y(r){return r.map(({webformatURL:o,largeImageURL:n,tags:s,likes:e,views:t,comments:a,downloads:p})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img
          class="gallery-image"
          src="${o}"
          alt="${s}"
          loading="lazy"
        />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${e}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${t}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${a}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${p}
          </p>
        </div>
      </a>
    </li>
  `).join("")}function L(r){r.innerHTML=""}function b(r,o){r.insertAdjacentHTML("beforeend",o)}const w=document.querySelector("#search-form"),c=document.querySelector(".gallery"),i=document.querySelector(".loader");let S=new m(".gallery a",{captionsData:"alt",captionDelay:250});function P(){i.innerHTML='<span class="lds-ring"><span></span><span></span><span></span><span></span></span>',i.classList.remove("hidden")}function l(){i.classList.add("hidden"),i.innerHTML=""}function f(r){u.error({title:"Error",message:r,position:"topRight"})}function $(r){u.info({title:"Info",message:r,position:"topRight"})}w.addEventListener("submit",q);function q(r){r.preventDefault();const n=new FormData(r.target).get("searchQuery").trim();if(!n){f("Please enter a search query!");return}L(c),P(),g(n).then(s=>{if(l(),s.hits.length===0){$("Sorry, there are no images matching your search query. Please try again!");return}const e=y(s.hits);b(c,e),S.refresh()}).catch(s=>{l(),f("Something went wrong. Please try again!"),console.error("Error:",s)})}
//# sourceMappingURL=index.js.map
