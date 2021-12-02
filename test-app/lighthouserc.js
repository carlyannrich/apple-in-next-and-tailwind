module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm next start',
            url: ['http://localhost:3000']
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};