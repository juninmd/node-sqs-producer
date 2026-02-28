```markdown
# AGENTS.md - Guidelines for AI Coding Agents

These guidelines outline the principles and rules for development of this AI coding agent repository. Adherence to these will ensure code quality, maintainability, and efficient execution.

## 1. DRY (Don't Repeat Yourself)

- All code should have a single, clear purpose.
- Avoid duplicating logic or implementation across multiple files.
- Refactor duplicated code into separate, reusable modules.
- When a component needs to be adapted across multiple files, extract it into a separate module.

## 2. KISS (Keep It Simple, Stupid)

- Code should be as concise and readable as possible.
- Minimize complexity within each element.
- Favor straightforward solutions over overly clever ones.
- Keep the logic simple.

## 3. SOLID Principles

- **Single Responsibility Principle:** Each class or module should have one, and only one, reason to change.
- **Open/Closed Principle:** The system should be open for extension but closed for modification.  New features should be added without altering existing code.
- **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
- **Interface Segregation Principle:** Clients shouldn't be forced to provide implementations for methods they don't use.
- **Dependency Inversion Principle:** High-level modules should not depend on low-level modules.

## 4. YAGNI (You Aren't Gonna Need It)

- Implement only the functionality explicitly required.
- Avoid adding unnecessary complexity or features that are not presently needed.
-  Prioritize completing the core tasks outlined in the requirements.

## 5. Code Standards & Formatting

- **Naming Conventions:**  Use snake_case for variables, functions, and classes.  Follow the established convention (e.g., `agent_data_processor`, `query_response_generator`).
- **Commenting:**  Provide clear and concise comments explaining the *why* behind the code, not just the *what*.
- **Line Length:**  Maintain a maximum of 80 characters per line.
- **Indentation:** Use 2 spaces for indentation.
- **Whitespace:** Use consistent spacing around operators and after commas.
- **Error Handling:** Implement basic error handling (e.g., logging) where appropriate, but avoid excessive logging.

## 6. File Structure & Content

- Each file must have a single, well-defined purpose.
- Files should be logically organized.
- Utilize comments within each file to explain individual functions or modules.
- Document complex algorithms or data structures thoroughly.

## 7. Test Coverage Requirements

- Achieve a minimum of 80% test coverage across all code.
- Use unit tests to verify the correctness of individual functions and modules.
- Include integration tests to verify interactions between modules.
- Test edge cases and boundary conditions.

## 8. Development Workflow

- Follow a structured development workflow (e.g., Agile, iterative).
- Regularly review and refactor code to improve maintainability.
- Document the design and implementation of each module.
- Conduct code reviews to identify potential issues.

## 9.  Code Constraints

- Each file must have a maximum of 180 lines of code.
-  All code must be easily understandable.
-  Prioritize clarity over brevity.

## 10.  AI Agent Considerations

-  Code should be easily adaptable to future AI agent updates and modifications.
-  Dependencies should be clearly defined and documented.
-  The code must be extensible, allowing for new functionalities and features to be added without significant restructuring.


```