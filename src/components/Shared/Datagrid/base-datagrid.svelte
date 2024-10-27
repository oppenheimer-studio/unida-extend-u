<script lang="ts">
	import type { GridHeader } from 'types/grid-header';
	import type { GridItem } from 'types/grid-item';
	import Pagination from '../Pagination/pagination.svelte';

	export let headers: GridHeader<any>[] = [];
	export let items: GridItem[] = [];
	export let customClass = '';

	export let page: number = 1;
	export const perPage: number = 10;
	export let count: number = 0;

	export let onNext = () => {};
	export let onPrev = () => {};
</script>

<div class="grid">
	<table class="table {customClass}">
		<thead>
			<tr>
				<th>#Id</th>
				{#each headers as header}
					<th>{header.name}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each items as item, i}
				<tr>
					<th>{item.id ?? i}</th>
					{#each headers as header}
						{#if !!header.component}
							<!-- this bodoo thing is to render a component and pass the desired props to that component, in case that the 
						 	getComponentProps is not defined a default Props<{ data }> is passed to the component to be rendered -->
							<td>
								<svelte:component
									this={header.component}
									{...header.getComponentProps ? header.getComponentProps(item) : { data: item }}
								></svelte:component>
							</td>
						{:else}
							<td>{item[header.field]}</td>
						{/if}
					{/each}
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th>#Id</th>
				{#each headers as header}
					<th>{header.name}</th>
				{/each}
			</tr>
		</tfoot>
	</table>

	<div class="justify-self-end px-8 py-4">
		<Pagination {page} {onPrev} {onNext} lastPage={Math.ceil(count / perPage)}></Pagination>
	</div>
</div>
