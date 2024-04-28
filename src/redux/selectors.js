import { createSelector } from "@reduxjs/toolkit";

export const selectContactsState = (state) => state.contacts;
export const filteredContacts = (state) => state.filters.name;

export const selectIsLoading = createSelector(
  [selectContactsState],
  (contacts) => contacts.isLoading
);

export const selectError = createSelector(
  [selectContactsState],
  (contacts) => contacts.error
);

export const selectFilteredContacts = createSelector(
  [selectContactsState, filteredContacts],
    (contacts, filterName) => {
        if (filteredContacts) {
            return contacts.items.filter((contact) => {
                contact.name.includes(filterName);
            });
        }
        return contacts;
  }
);
