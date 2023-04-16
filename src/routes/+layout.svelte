<script>
  import "../app.css";
</script>

<header class="decoration-clone z-40 content-center flex text-center">
  <nav class="flex z-40 w-screen text-white h-14 backdrop-blur-xl backdrop-saturate-150 fixed justify-between text-center bg-[#1a191cbc] shadow-sm shadow-[#282828]">
    <a href="/" id="homelink" class="h-14">
      <div class="cursor-pointer text-xl font-bold flex flex-row h-full items-center ml-4">
        <img src="favicon.png" alt="logo" class="w-6 object-contain" />
        <p class="ml-4">InnateMC</p>
      </div>
    </a>

    <div class=" flex h-full items-center pr-4 font-sans">
      <a href="news" class="w-24 text-center text-xs hover:text-[#2997ff]">News</a>
      <a href="docs" class="w-24 text-center text-xs hover:text-[#2997ff]">Docs</a>
      <a href="https://github.com/InnateMC/InnateMC/releases" class="w-24 text-center text-xs hover:text-[#2997ff]">Releases</a>
      <a href="https://github.com/InnateMC/InnateMC" class="w-24 text-center text-xs hover:text-[#2997ff]">Contribute</a>
    </div>
  </nav>
</header>
<div class="-z-10 absolute left-0 top-0 w-full h-full overflow-hidden">
  <img src="logo.png" alt="background" class="absolute top-0 blur-xs h-96 w-96 saturate-150 animate-randommovement overflow-hidden select-none" />
</div>
<slot />
