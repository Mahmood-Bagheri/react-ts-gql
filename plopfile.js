module.exports = plop => {
    plop.setGenerator("component", {
        description: "Create a component",
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: "input",
                // Variable name for this input
                name: "name",
                // Prompt to display on command line
                message: "What is your component name?",
            },
        ],
        actions: [
            {
                // Add a new file
                type: "add",
                // Path for the new file
                path:
                    "src/components/{{properCase name}}/{{properCase name}}.tsx",
                // Handlebars template used to generate content of new file
                templateFile:
                    "internals/plop-templates/component/component.tsx.hbs",
            },
            {
                // Add a new file
                type: "add",
                // Path for the new file
                path:
                    "src/components/{{properCase name}}/{{properCase name}}.ts",
                // Handlebars template used to generate content of new file
                templateFile: "internals/plop-templates/component/styles.hbs",
            },
            {
                // Add a new file
                type: "add",
                // Path for the new file
                path:
                    "src/components/{{properCase name}}/{{properCase name}}.types.d.ts",
                // Handlebars template used to generate content of new file
                templateFile:
                    "internals/plop-templates/component/component.types.d.ts.hbs",
            },
            {
                // Add a new file
                type: "add",
                // Path for the new file
                path: "src/components/{{properCase name}}/index.ts",
                // Handlebars template used to generate content of new file
                templateFile: "internals/plop-templates/component/index.ts.hbs",
            },
            {
                // Add a new file
                type: "add",
                // Path for the new file
                path:
                    "src/components/{{properCase name}}/{{properCase name}}.test.tsx",
                // Handlebars template used to generate content of new file
                templateFile:
                    "internals/plop-templates/component/component.test.tsx.hbs",
            },
        ],
    });
};
