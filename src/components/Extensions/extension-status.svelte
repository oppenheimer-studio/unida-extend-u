<script lang="ts">
	import type { ExtensionStatusType } from "../../types/extensions/extension-status-type";

    export let status: ExtensionStatusType = "pendiente"
</script>

{#if status == "pendiente"}
    <span class="uppercase font-bold text-warning">{status}</span>
{/if}
{#if status == "aprobado"}
    <span class="uppercase font-bold text-success">{status}</span>
{/if}
{#if status == "nuevo"}
    <span class="uppercase font-bold text-info">{status}</span>
{/if}
{#if status == "rechazado"}
    <span class="uppercase font-bold text-error">{status}</span>
{/if}