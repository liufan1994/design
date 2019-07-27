<template>
    <div id="app">
        <keep-alive exclude="home">
            <router-view />
        </keep-alive>
        <h-footer/>
    </div>
</template>
