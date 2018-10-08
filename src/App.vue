<template>
    <div class="container">
        <appHeader></appHeader>
        <hr>
        <div class="row">
            <appServers></appServers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <appFooter></appFooter>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appFooter: Footer,
            appHeader: Header,
            appServers: Servers,
            'app-server-details': ServerDetails
        }
    }
</script>

<style>

</style>
