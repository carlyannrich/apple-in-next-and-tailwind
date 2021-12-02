module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm next start',
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};