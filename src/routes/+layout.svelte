<script>
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  $: {
    console.log($page.url.pathname);
  }
  import "../app.css";
  let navMenuOpen = false;
  let navHeight = "h-14";

  function toggleNavBar() {
    navMenuOpen = !navMenuOpen;
    if (navMenuOpen) {
      navHeight = "h-full";
    } else {
      navHeight = "h-14";
    }
  }
</script>

<header class="decoration-clone z-40 flex text-center font-sans">
  <nav class=" fixed flex z-40 w-screen text-white {navHeight}  md:h-14 transition-all backdrop-blur-xl backdrop-saturate-150 text-center bg-[#1a191cbc] shadow-sm shadow-[#282828] md:flex-row flex-col">
    <div class="flex justify-between w-screen h-14">
      <a href="/" id="homelink" class="h-full" on:click={toggleNavBar}>
        <div class="cursor-pointer text-xl font-bold flex flex-row h-14 items-center ml-4">
          <img src="favicon.png" alt="logo" class="w-6 object-contain" />
          <p class="ml-4">InnateMC</p>
        </div>
      </a>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="flex pr-4 h-14 items-center md:hidden" on:click={toggleNavBar}>
        {#if navMenuOpen}
          <img src="hamburger-icon-x.webp" alt="hamburger" class="invert h-8 select-none cursor-pointer" />
        {:else}
          <img src="hamburger-icon.webp" alt="hamburger" class="invert h-8 select-none cursor-pointer" />
        {/if}
      </div>
      <div class="h-14 items-center pr-4 font-sans md:flex hidden">
        <a data-routed={$page.url.pathname == "/"} href="/" class="w-24 text-center text-xs hover:text-[#2997ff] data-[routed=true]:text-[#919191]">Home</a>
        <a data-routed={$page.url.pathname == "/news"} href="/news" class="w-24 text-center text-xs hover:text-[#2997ff] data-[routed=true]:text-[#919191]">News</a>
        <a data-routed={$page.url.pathname == "/"} href="https://github.com/InnateMC/InnateMC/releases" class="w-24 text-center text-xs hover:text-[#2997ff]">Releases</a>
        <a data-routed={$page.url.pathname == "/"} href="https://github.com/InnateMC/InnateMC" class="w-24 text-center text-xs hover:text-[#2997ff]">Contribute</a>
      </div>
    </div>
    {#if navMenuOpen}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="h-64 items-center justify-start pr-4 font-sans md:hidden flex flex-col self-center mt-16" on:click={toggleNavBar}>
        <a data-routed={$page.url.pathname == "/"} href="/" class="h-full text-center text-3xl hover:text-[#2997ff] data-[routed=true]:text-[#919191]">Home</a>
        <a data-routed={$page.url.pathname == "/news"} href="/news" class="h-full text-center text-3xl hover:text-[#2997ff] data-[routed=true]:text-[#919191]">News</a>
        <a href="https://github.com/InnateMC/InnateMC/releases" class="h-full text-center text-3xl hover:text-[#2997ff]">Releases</a>
        <a href="https://github.com/InnateMC/InnateMC" class="h-full text-center text-3xl hover:text-[#2997ff]">Contribute</a>
      </div>
    {/if}
  </nav>
</header>
<div class="-z-10 fixed left-0 top-0 w-full h-full overflow-hidden">
  <div class="absolute top-0 blur-xs h-96 w-96 saturate-150 animate-randommovement overflow-hidden select-none bg-blue-400" />
  <div class="absolute top-0 blur-xs h-96 w-96 saturate-150 animate-randommovementDifferent overflow-hidden select-none bg-purple-700" />
</div>
<div class="pt-28 overflow-hidden">
  <slot />
</div>

<style>
</style>
