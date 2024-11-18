// /src/stores/profileStore.ts
import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: {
            title: 'Profile',
            sections: [
                {
                    title: 'Introduction',
                    paragraphs: [
                        'This is the introduction paragraph.',
                        'Here is another paragraph for the introduction section.'
                    ]
                },
                {
                    title: 'Gallery',
                    images: [
                        '/assets/david.jpg',
                        '/assets/default.png'
                    ]
                }
            ]
        }
    }),
    getters: {
        getProfile: (state) => state.profile
    },
    actions: {
        // Define any actions if needed
    }
});