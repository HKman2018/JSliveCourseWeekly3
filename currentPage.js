export default {
    template: `<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item":class="{ disabled: pages.current_page === 1 }">
      <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatePage(pages.current_page-1)">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item" v-for="i in pages.total_pages":key="i":class="{ active: pages.current_page === i }">
    <a class="page-link" href="#"@click.prevent="updatePage(i)">{{i}}</a></li>
    
    <li class="page-item":class="{ disabled: pages.current_page === pages.total_pages }">
      <a class="page-link" href="#" aria-label="Next"@click.prevent="updatePage(pages.current_page+1)">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>`,
    data() {
        return {
            // tempData: {},
        }
    },
    props: ['pages'],
    methods: {
        updatePage(pageNum) {
            console.log(pageNum)
            this.$emit('update', pageNum)
        },
    }
}