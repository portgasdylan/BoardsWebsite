# Portfolio Website - Entity Relationship Diagram Documentation

## Overview
This document provides the conceptual data model for Dylan Maxwell's Portfolio Website. While this is a static React application without a traditional database, we can model the relationships between different data entities and components.

## Entity Relationship Diagram (Text Representation)

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│    PORTFOLIO    │    │    SECTIONS     │    │    PROJECTS     │
│                 │    │                 │    │                 │
│ - owner_name    │────│ - section_id    │────│ - project_id    │
│ - title         │    │ - section_name  │    │ - title         │
│ - description   │    │ - order         │    │ - description   │
│ - contact_info  │    │ - content       │    │ - tech_stack[]  │
│ - social_links  │    │                 │    │ - github_url    │
└─────────────────┘    └─────────────────┘    │ - demo_url      │
                                              │ - type          │
                                              └─────────────────┘
                                                       │
                                                       │
                                              ┌─────────────────┐
                                              │   OBJECTIVES    │
                                              │                 │
                                              │ - objective_id  │
                                              │ - title         │
                                              │ - description   │
                                              │ - projects[]    │
                                              └─────────────────┘
                                                       │
                                                       │
                                              ┌─────────────────┐
                                              │     SKILLS      │
                                              │                 │
                                              │ - skill_id      │
                                              │ - category      │
                                              │ - skill_name    │
                                              │ - proficiency   │
                                              │ - icon          │
                                              └─────────────────┘
```

## Entity Descriptions

### 1. PORTFOLIO (Main Entity)
**Purpose**: Represents the overall portfolio information
**Attributes**:
- `owner_name`: String - "Dylan Maxwell"
- `title`: String - Portfolio title
- `description`: String - Main portfolio description
- `contact_info`: Object - Email, phone, location
- `social_links`: Array - GitHub, LinkedIn links

**Relationships**: 
- One-to-Many with SECTIONS
- Contains all other entities

### 2. SECTIONS (Component Entity)
**Purpose**: Represents different sections of the portfolio
**Attributes**:
- `section_id`: String - Unique identifier (hero, about, projects, etc.)
- `section_name`: String - Display name
- `order`: Number - Display order
- `content`: Object - Section-specific content

**Relationships**:
- Many-to-One with PORTFOLIO
- One-to-Many with PROJECTS (for project section)

### 3. PROJECTS (Content Entity)
**Purpose**: Represents individual projects showcased
**Attributes**:
- `project_id`: String - Unique identifier
- `title`: String - Project name
- `description`: String - Project description
- `tech_stack`: Array - Technologies used
- `github_url`: String - Repository link
- `demo_url`: String - Live demo link
- `type`: String - Project category
- `explanation`: String - Why it fits objectives

**Relationships**:
- Many-to-One with SECTIONS
- Many-to-Many with OBJECTIVES

### 4. OBJECTIVES (Academic Entity)
**Purpose**: Represents CS degree objectives
**Attributes**:
- `objective_id`: Number - Objective number (1-6)
- `title`: String - Objective description
- `description`: String - Detailed explanation
- `projects`: Array - Associated projects
- `icon`: Component - Visual representation

**Relationships**:
- Many-to-Many with PROJECTS
- One-to-Many with SKILLS (indirectly)

### 5. SKILLS (Capability Entity)
**Purpose**: Represents technical skills and proficiencies
**Attributes**:
- `skill_id`: String - Unique identifier
- `category`: String - Skill category (Frontend, Backend, etc.)
- `skill_name`: String - Technology name
- `proficiency`: Number - Skill level (0-100)
- `icon`: Component - Visual representation

**Relationships**:
- Many-to-One with SECTIONS
- Related to PROJECTS through technology usage

## Data Flow Diagram

```
User Request → React Router → Component → Data Structure → Render
     ↓              ↓            ↓            ↓           ↓
   Browser    →   App.tsx   →  Section   →  Static    →  DOM
                              Component     Objects
```

## Implementation Notes

### Data Storage
- **Static Objects**: All data is stored as JavaScript objects/arrays in component files
- **No Database**: This is a client-side only application
- **State Management**: React's built-in state management
- **Persistence**: No data persistence required (static content)

### Key Relationships
1. **Portfolio → Sections**: One portfolio contains multiple sections
2. **Sections → Projects**: Project section contains multiple projects
3. **Projects ↔ Objectives**: Many-to-many relationship (projects can fulfill multiple objectives)
4. **Sections → Skills**: Skills section contains categorized skill sets

### Data Validation
- Type checking through TypeScript interfaces
- Prop validation in React components
- Static analysis during build process

## File Structure Mapping

```
src/
├── components/
│   ├── Header.tsx          → Navigation entity
│   ├── Hero.tsx           → Hero section entity
│   ├── About.tsx          → About section entity
│   ├── Objectives.tsx     → Objectives + Projects entities
│   ├── Projects.tsx       → Projects entity
│   ├── Skills.tsx         → Skills entity
│   └── Contact.tsx        → Contact section entity
└── App.tsx                → Main Portfolio entity
```

## Conclusion

While this portfolio website doesn't use a traditional database, the conceptual data model shows clear relationships between different content entities. The static nature of the data makes it perfect for a portfolio showcase while maintaining clean separation of concerns and reusable component architecture.

This ER diagram demonstrates understanding of:
- Entity relationship modeling
- Data structure design
- Component-based architecture
- Information hierarchy
- Content organization principles