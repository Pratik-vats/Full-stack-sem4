export const initialCompanies = [
    { id: 1, name: "Google", field: "Software, AI, Cloud", applied: false },
    { id: 2, name: "Microsoft", field: "Cloud, Dev Tools, AI", applied: false },
    { id: 3, name: "Apple", field: "Hardware, iOS, Design", applied: false },
    { id: 4, name: "Meta", field: "Social, VR, AI", applied: false },
    { id: 5, name: "NVIDIA", field: "Graphics, AI, Chips", applied: false },
    { id: 6, name: "IBM", field: "Enterprise, Cloud", applied: false }
];

export const searchCompanies = (companies, searchValue) => {
    return companies.filter(company => company.name.toLowerCase().includes(searchValue.toLowerCase()));
};

export const applyToCompany = (companies, id) => {
    return companies.map(c => c.id === id ? { ...c, applied: true } : c);
};

export const deleteCompany = (companies, id) => {
    return companies.filter(c => c.id !== id);
};

export const addCompany = (companies, name, field) => {
    const newCompany = {
        id: Date.now(),
        name,
        field,
        applied: false
    };
    return [...companies, newCompany];
};
