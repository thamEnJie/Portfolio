<script lang="ts">
    import { hardSkills } from "./homeData";
</script>

<h2 class="mb-3">My Programming & Design Toolkit</h2>
<div class="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
    {#each hardSkills as skill}
        <div class="border rounded shadow py-4">
            <img src="assets/hardskills/{skill.title}.png" class="object-contain h-24 w-24 mb-4" alt="{skill.title} app icon" />
            <p class="my-0">
                <b><u>{skill.title}</u></b>
                <br>
                {skill.text}
            </p>
        </div>
    {/each}
    </div>