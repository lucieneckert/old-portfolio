<script>
  import { each } from "svelte/internal";

  let musicfolder;
  let tracks = [0, 1, 2];
  let currenttrack = "no track selected";
</script>

<ul>
  {#each tracks as track}
    <li>
      <button onclick="document.getElementById('{currenttrack}').play()">
        ▶
      </button>
      <button onclick="document.getElementById('{currenttrack}').pause()">
        ⏸
      </button>
      {currenttrack}<audio id={currenttrack} src={track} preload="none" />
    </li>
  {/each}
</ul>
