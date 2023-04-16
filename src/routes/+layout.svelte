<script>
  import { browser } from "$app/environment";
  let scrnWidth = 0;
  let mobileInterfaceOn = false;
  $: {
    if (browser) {
      if (mobileInterfaceOn && navMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }
  $: {
    console.log(scrnWidth);
    if (scrnWidth > 600) {
      mobileInterfaceOn = false;
    } else {
      mobileInterfaceOn = true;
    }
  }
  import "../app.css";
  let navMenuOpen = false;
  let navHeight = "h-14";

  $: {
    console.log(navMenuOpen);
  }
  function toggleNavBar() {
    navMenuOpen = !navMenuOpen;
    if (navMenuOpen) {
      navHeight = "h-full";
    } else {
      navHeight = "h-14";
    }
  }
</script>

<svelte:window bind:outerWidth={scrnWidth} />
<header class="decoration-clone z-40 flex text-center">
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
        <a href="news" class="w-24 text-center text-xs hover:text-[#2997ff]">News</a>
        <a href="docs" class="w-24 text-center text-xs hover:text-[#2997ff]">Docs</a>
        <a href="https://github.com/InnateMC/InnateMC/releases" class="w-24 text-center text-xs hover:text-[#2997ff]">Releases</a>
        <a href="https://github.com/InnateMC/InnateMC" class="w-24 text-center text-xs hover:text-[#2997ff]">Contribute</a>
      </div>
    </div>
    {#if navMenuOpen}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="h-64 items-center justify-start pr-4 font-sans md:hidden flex flex-col self-center mt-16" on:click={toggleNavBar}>
        <a href="news" class="h-full text-center text-3xl hover:text-[#2997ff]">News</a>
        <a href="docs" class="h-full text-center text-3xl hover:text-[#2997ff]">Docs</a>
        <a href="https://github.com/InnateMC/InnateMC/releases" class="h-full text-center text-3xl hover:text-[#2997ff]">Releases</a>
        <a href="https://github.com/InnateMC/InnateMC" class="h-full text-center text-3xl hover:text-[#2997ff]">Contribute</a>
      </div>
    {/if}
  </nav>
</header>
<div class="-z-10 fixed left-0 top-0 w-full h-full overflow-hidden">
  <img src="logo.png" alt="background" class="absolute top-0 blur-xs h-96 w-96 saturate-150 animate-randommovement overflow-hidden select-none" />
</div>
<div class="pt-16 overflow-hidden">
  <slot />
</div>
