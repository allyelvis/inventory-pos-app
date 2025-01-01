<template>
  <div>
    <h2>Accounting Dashboard</h2>
    <button @click="viewTransactions">View Transactions</button>
    <button @click="viewFiscalization">View Fiscalization</button>
  </div>
</template>

<script>
export default {
  methods: {
    viewTransactions() {
      this..push('/accounting/transactions');
    },
    viewFiscalization() {
      this..push('/accounting/fiscalization');
    }
  }
}
</script>
