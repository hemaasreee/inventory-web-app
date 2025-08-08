// Stock Inventory Management App
class InventoryApp {
    constructor() {
        // Initialize data from provided JSON
        this.data = {
            inventory_items: [{"id": 1, "name": "Door Handles", "category": "General Hardware", "brand": "Hettich", "current_stock": 85, "total_stock_received": 275, "min_stock_level": 17, "max_stock_level": 148, "location": "KBR Cot", "last_updated": "2025-08-08 13:09:20"}, {"id": 2, "name": "Door Hinges", "category": "Door Hardware", "brand": "DORMA", "current_stock": 70, "total_stock_received": 224, "min_stock_level": 24, "max_stock_level": 149, "location": "Shop Floor", "last_updated": "2025-08-08 13:09:20"}, {"id": 3, "name": "Door Locks", "category": "Door Hardware", "brand": "Godrej", "current_stock": 60, "total_stock_received": 210, "min_stock_level": 16, "max_stock_level": 132, "location": "Warehouse A", "last_updated": "2025-08-08 13:09:20"}, {"id": 4, "name": "Door Knobs", "category": "Door Hardware", "brand": "Blum", "current_stock": 95, "total_stock_received": 243, "min_stock_level": 20, "max_stock_level": 60, "location": "Warehouse B", "last_updated": "2025-08-08 13:09:20"}, {"id": 5, "name": "Drawer Slides", "category": "Door Hardware", "brand": "Hafele", "current_stock": 38, "total_stock_received": 82, "min_stock_level": 11, "max_stock_level": 107, "location": "Shop Floor", "last_updated": "2025-08-08 13:09:20"}, {"id": 6, "name": "Soft Close Hinges", "category": "Door Hardware", "brand": "Hettich", "current_stock": 60, "total_stock_received": 168, "min_stock_level": 12, "max_stock_level": 110, "location": "Warehouse A", "last_updated": "2025-08-08 13:09:20"}, {"id": 7, "name": "Concealed Hinges", "category": "Door Hardware", "brand": "DORMA", "current_stock": 41, "total_stock_received": 161, "min_stock_level": 20, "max_stock_level": 103, "location": "Warehouse B", "last_updated": "2025-08-08 13:09:20"}, {"id": 8, "name": "Kitchen Pulls", "category": "Kitchen Hardware", "brand": "Godrej", "current_stock": 48, "total_stock_received": 160, "min_stock_level": 20, "max_stock_level": 146, "location": "Shop Floor", "last_updated": "2025-08-08 13:09:20"}, {"id": 9, "name": "Kitchen Knobs", "category": "Kitchen Hardware", "brand": "Blum", "current_stock": 52, "total_stock_received": 112, "min_stock_level": 24, "max_stock_level": 87, "location": "Warehouse A", "last_updated": "2025-08-08 13:09:20"}, {"id": 10, "name": "Cabinet Hinges", "category": "Kitchen Hardware", "brand": "Hafele", "current_stock": 69, "total_stock_received": 182, "min_stock_level": 21, "max_stock_level": 89, "location": "Warehouse B", "last_updated": "2025-08-08 13:09:20"}, {"id": 11, "name": "Drawer Channels", "category": "Kitchen Hardware", "brand": "Hettich", "current_stock": 54, "total_stock_received": 138, "min_stock_level": 15, "max_stock_level": 67, "location": "Shop Floor", "last_updated": "2025-08-08 13:09:20"}, {"id": 12, "name": "Basket Pullouts", "category": "Kitchen Hardware", "brand": "DORMA", "current_stock": 76, "total_stock_received": 156, "min_stock_level": 14, "max_stock_level": 128, "location": "Warehouse A", "last_updated": "2025-08-08 13:09:20"}, {"id": 13, "name": "Magic Corner", "category": "Kitchen Hardware", "brand": "Godrej", "current_stock": 7, "total_stock_received": 127, "min_stock_level": 22, "max_stock_level": 84, "location": "Warehouse B", "last_updated": "2025-08-08 13:09:20"}, {"id": 14, "name": "Pantry Units", "category": "Kitchen Hardware", "brand": "Blum", "current_stock": 95, "total_stock_received": 151, "min_stock_level": 16, "max_stock_level": 140, "location": "Shop Floor", "last_updated": "2025-08-08 13:09:20"}, {"id": 15, "name": "Dish Racks", "category": "Kitchen Hardware", "brand": "Hafele", "current_stock": 23, "total_stock_received": 127, "min_stock_level": 14, "max_stock_level": 145, "location": "Warehouse A", "last_updated": "2025-08-08 13:09:20"}, {"id": 16, "name": "Furniture Handles", "category": "Furniture Hardware", "brand": "Hettich", "current_stock": 41, "total_stock_received": 131, "min_stock_level": 12, "max_stock_level": 149, "location": "Warehouse B", "last_updated": "2025-08-08 13:09:20"}, {"id": 17, "name": "Furniture Legs", "category": "Furniture Hardware", "brand": "DORMA", "current_stock": 25, "total_stock_received": 145, "min_stock_level": 23, "max_stock_level": 51, "location": "Shop Floor", "last_updated": "2025-08-08 13:09:20"}, {"id": 18, "name": "Casters", "category": "Furniture Hardware", "brand": "Godrej", "current_stock": 11, "total_stock_received": 173, "min_stock_level": 12, "max_stock_level": 88, "location": "Warehouse A", "last_updated": "2025-08-08 13:09:20"}, {"id": 19, "name": "Brackets", "category": "Furniture Hardware", "brand": "Blum", "current_stock": 46, "total_stock_received": 106, "min_stock_level": 23, "max_stock_level": 100, "location": "Warehouse B", "last_updated": "2025-08-08 13:09:20"}, {"id": 20, "name": "Table Hinges", "category": "Furniture Hardware", "brand": "Hafele", "current_stock": 36, "total_stock_received": 112, "min_stock_level": 19, "max_stock_level": 136, "location": "Shop Floor", "last_updated": "2025-08-08 13:09:20"}, {"id": 21, "name": "Hydraulic Lifts", "category": "Furniture Hardware", "brand": "Hettich", "current_stock": 74, "total_stock_received": 166, "min_stock_level": 14, "max_stock_level": 109, "location": "Warehouse A", "last_updated": "2025-08-08 13:09:20"}, {"id": 22, "name": "Furniture Locks", "category": "Furniture Hardware", "brand": "DORMA", "current_stock": 52, "total_stock_received": 122, "min_stock_level": 18, "max_stock_level": 105, "location": "Warehouse B", "last_updated": "2025-08-08 13:09:20"}, {"id": 23, "name": "Window Handles", "category": "Window Hardware", "brand": "Godrej", "current_stock": 99, "total_stock_received": 179, "min_stock_level": 25, "max_stock_level": 140, "location": "Shop Floor", "last_updated": "2025-08-08 13:09:20"}, {"id": 24, "name": "Window Hinges", "category": "Window Hardware", "brand": "Blum", "current_stock": 28, "total_stock_received": 148, "min_stock_level": 15, "max_stock_level": 135, "location": "Warehouse A", "last_updated": "2025-08-08 13:09:20"}, {"id": 25, "name": "Window Locks", "category": "Window Hardware", "brand": "Hafele", "current_stock": 72, "total_stock_received": 100, "min_stock_level": 19, "max_stock_level": 105, "location": "Warehouse B", "last_updated": "2025-08-08 13:09:20"}, {"id": 26, "name": "Curtain Rods", "category": "Window Hardware", "brand": "Hettich", "current_stock": 14, "total_stock_received": 158, "min_stock_level": 20, "max_stock_level": 97, "location": "Shop Floor", "last_updated": "2025-08-08 13:09:20"}, {"id": 27, "name": "Curtain Brackets", "category": "Window Hardware", "brand": "DORMA", "current_stock": 84, "total_stock_received": 156, "min_stock_level": 16, "max_stock_level": 104, "location": "Warehouse A", "last_updated": "2025-08-08 13:09:20"}, {"id": 28, "name": "Blind Hardware", "category": "Window Hardware", "brand": "Godrej", "current_stock": 92, "total_stock_received": 144, "min_stock_level": 11, "max_stock_level": 142, "location": "Warehouse B", "last_updated": "2025-08-08 13:09:20"}, {"id": 29, "name": "Cabinet Pulls", "category": "Cabinet Hardware", "brand": "Blum", "current_stock": 31, "total_stock_received": 159, "min_stock_level": 14, "max_stock_level": 143, "location": "Shop Floor", "last_updated": "2025-08-08 13:09:20"}, {"id": 30, "name": "Cabinet Knobs", "category": "Cabinet Hardware", "brand": "Hafele", "current_stock": 35, "total_stock_received": 147, "min_stock_level": 22, "max_stock_level": 143, "location": "Warehouse A", "last_updated": "2025-08-08 13:09:20"}, {"id": 31, "name": "Shelf Pins", "category": "Cabinet Hardware", "brand": "Hettich", "current_stock": 59, "total_stock_received": 159, "min_stock_level": 18, "max_stock_level": 119, "location": "Warehouse B", "last_updated": "2025-08-08 13:09:20"}, {"id": 32, "name": "Catches", "category": "Cabinet Hardware", "brand": "DORMA", "current_stock": 57, "total_stock_received": 137, "min_stock_level": 19, "max_stock_level": 79, "location": "Shop Floor", "last_updated": "2025-08-08 13:09:20"}, {"id": 33, "name": "Cabinet Locks", "category": "Cabinet Hardware", "brand": "Godrej", "current_stock": 21, "total_stock_received": 121, "min_stock_level": 19, "max_stock_level": 144, "location": "Warehouse A", "last_updated": "2025-08-08 13:09:20"}, {"id": 34, "name": "Glass Door Hardware", "category": "Cabinet Hardware", "brand": "Blum", "current_stock": 9, "total_stock_received": 169, "min_stock_level": 11, "max_stock_level": 118, "location": "Warehouse B", "last_updated": "2025-08-08 13:09:20"}],
            transactions: [],
            categories: ["General Hardware", "Kitchen Hardware", "Wardrobe Hardware", "Miscellaneous Hardware","Electricals"],
            locations: ["MBR Cot", "KBR Cot", "Store Room" , "K4 Skirting", "K3 Backside"],
            project_names: ["HIU2525", "HIU2526", "HIU2527", "HIU2528", "HIU2529", "HIU2530", "HIU2531", "HIU2532", "HIU2533", "HIU2534", "HIU2535", "HIU2536", "HIU2537", "HIU2538", "HIU2539", "HIU2540", "HIU2541", "HIU2542", "HIU2543", "HIU2544", "HIU2545", "HIU2546", "HIU2547", "HIU2548", "HIU2549", "HIU2550", "HIU2551", "HIU2552", "HIU2553", "HIU2554", "HIU2555", "HIU2556", "HIU2557", "HIU2558", "HIU2559", "HIU2560", "HIU2561", "HIU2562", "HIU2563", "HIU2564", "HIU2565", "HIU2566", "HIU2567", "HIU2568", "HIU2569", "HIU2570" , "HIU2571", "HIU2572", "HIU2573", "HIU2574", "HIU2575", "HIU2576", "HIU2577", "HIU2578", "HIU2579", "HIU2580", "HIU2581", "HIU2582", "HIU2583", "HIU2584", "HIU2585", "HIU2586", "HIU2587", "HIU2588", "HIU2589", "HIU2590", "HIU2591", "HIU2592", "HIU2593", "HIU2594", "HIU2595", "HIU2596", "HIU2597", "HIU2598", "HIU2599", "HIU25100", ]
        };

        this.nextItemId = Math.max(...this.data.inventory_items.map(item => item.id)) + 1;
        this.nextTransactionId = Math.max(...this.data.transactions.map(t => t.id)) + 1;
        this.currentEditingItemId = null;
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        try {
            this.setupNavigation();
            this.setupModals();
            this.setupFilters();
            this.setupForms();
            this.populateDropdowns();
            this.showSection('dashboard');
            this.updateDashboard();
            this.renderInventoryTable();
            this.renderTransactionsTable();
            console.log('App initialized successfully');
        } catch (error) {
            console.error('Error initializing app:', error);
        }
    }

    setupNavigation() {
        const navBtns = document.querySelectorAll('.nav-btn');
        
        navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.getAttribute('data-section');
                
                this.showSection(section);
                
                navBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    showSection(sectionName) {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update data when switching sections
        if (sectionName === 'dashboard') {
            this.updateDashboard();
        } else if (sectionName === 'inventory') {
            this.renderInventoryTable();
        } else if (sectionName === 'transactions') {
            this.renderTransactionsTable();
        }
    }

    setupModals() {
        // Item modal
        const addItemBtn = document.getElementById('add-item-btn');
        const itemModalClose = document.getElementById('item-modal-close');
        const itemCancelBtn = document.getElementById('item-cancel-btn');

        if (addItemBtn) {
            addItemBtn.addEventListener('click', () => {
                this.openItemModal();
            });
        }

        [itemModalClose, itemCancelBtn].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => {
                    this.closeModal('item-modal');
                });
            }
        });

        // Transaction modal
        const addTransactionBtn = document.getElementById('add-transaction-btn');
        const transactionModalClose = document.getElementById('transaction-modal-close');
        const transactionCancelBtn = document.getElementById('transaction-cancel-btn');

        if (addTransactionBtn) {
            addTransactionBtn.addEventListener('click', () => {
                this.openTransactionModal();
            });
        }

        [transactionModalClose, transactionCancelBtn].forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => {
                    this.closeModal('transaction-modal');
                });
            }
        });

        // Transaction type change handler
        const transactionTypeSelect = document.querySelector('#transaction-form select[name="type"]');
        if (transactionTypeSelect) {
            transactionTypeSelect.addEventListener('change', (e) => {
                const projectField = document.getElementById('project-field');
                const projectSelect = document.querySelector('#transaction-form select[name="project_name"]');
                
                if (e.target.value === 'outgoing') {
                    projectField.style.display = 'block';
                    projectSelect.required = true;
                } else {
                    projectField.style.display = 'none';
                    projectSelect.required = false;
                }
            });
        }

        // Close modals on backdrop click
        const itemModal = document.getElementById('item-modal');
        const transactionModal = document.getElementById('transaction-modal');
        
        [itemModal, transactionModal].forEach(modal => {
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        this.closeModal(modal.id);
                    }
                });
            }
        });
    }

    setupFilters() {
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const locationFilter = document.getElementById('location-filter');
        const stockStatusFilter = document.getElementById('stock-status-filter');
        const transactionTypeFilter = document.getElementById('transaction-type-filter');
        const projectFilter = document.getElementById('project-filter');
        const dateFromFilter = document.getElementById('date-from-filter');
        const dateToFilter = document.getElementById('date-to-filter');

        [searchInput, categoryFilter, locationFilter, stockStatusFilter].forEach(filter => {
            if (filter) {
                filter.addEventListener('input', () => this.renderInventoryTable());
            }
        });

        [transactionTypeFilter, projectFilter, dateFromFilter, dateToFilter].forEach(filter => {
            if (filter) {
                filter.addEventListener('input', () => this.renderTransactionsTable());
            }
        });
    }

    setupForms() {
        const itemForm = document.getElementById('item-form');
        const transactionForm = document.getElementById('transaction-form');

        if (itemForm) {
            itemForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleItemSubmit(e);
            });
        }

        if (transactionForm) {
            transactionForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleTransactionSubmit(e);
            });
        }
    }

    populateDropdowns() {
        // Category filters
        const categoryFilter = document.getElementById('category-filter');
        const itemCategorySelect = document.querySelector('#item-form select[name="category"]');
        
        if (categoryFilter && itemCategorySelect) {
            this.data.categories.forEach(category => {
                const option1 = new Option(category, category);
                const option2 = new Option(category, category);
                categoryFilter.appendChild(option1);
                itemCategorySelect.appendChild(option2);
            });
        }

        // Location filter
        const locationFilter = document.getElementById('location-filter');
        if (locationFilter) {
            this.data.locations.forEach(location => {
                const option = new Option(location, location);
                locationFilter.appendChild(option);
            });
        }

        // Project filters
        const projectFilter = document.getElementById('project-filter');
        const transactionProjectSelect = document.querySelector('#transaction-form select[name="project_name"]');
        
        if (projectFilter && transactionProjectSelect) {
            this.data.project_names.forEach(project => {
                const option1 = new Option(project, project);
                const option2 = new Option(project, project);
                projectFilter.appendChild(option1);
                transactionProjectSelect.appendChild(option2);
            });
        }

        // Transaction item dropdown
        const transactionItemSelect = document.querySelector('#transaction-form select[name="item_id"]');
        if (transactionItemSelect) {
            this.data.inventory_items.forEach(item => {
                const option = new Option(item.name, item.id);
                transactionItemSelect.appendChild(option);
            });
        }
    }

    updateDashboard() {
        const totalItems = this.data.inventory_items.length;
        const totalStockItems = this.data.inventory_items.reduce((sum, item) => sum + item.current_stock, 0);
        const totalStockReceived = this.data.inventory_items.reduce((sum, item) => sum + item.total_stock_received, 0);
        const lowStockItems = this.data.inventory_items.filter(item => item.current_stock < item.min_stock_level);

        const totalItemsEl = document.getElementById('total-items');
        const totalStockItemsEl = document.getElementById('total-stock-items');
        const totalReceivedEl = document.getElementById('total-received');
        const lowStockCountEl = document.getElementById('low-stock-count');

        if (totalItemsEl) totalItemsEl.textContent = totalItems.toLocaleString();
        if (totalStockItemsEl) totalStockItemsEl.textContent = totalStockItems.toLocaleString();
        if (totalReceivedEl) totalReceivedEl.textContent = totalStockReceived.toLocaleString();
        if (lowStockCountEl) lowStockCountEl.textContent = lowStockItems.length;

        this.renderLowStockAlerts(lowStockItems);
        this.renderRecentTransactions();
    }

    renderLowStockAlerts(lowStockItems) {
        const container = document.getElementById('low-stock-alerts');
        if (!container) return;
        
        if (lowStockItems.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No low stock items currently!</p></div>';
            return;
        }

        const html = lowStockItems.map(item => `
            <div class="low-stock-item">
                <div class="low-stock-info">
                    <h4>${item.name}</h4>
                    <p>${item.category} • ${item.location}</p>
                </div>
                <div class="low-stock-stock">
                    <span class="stock-status stock-status--critical">${item.current_stock}</span>
                    <div class="text-sm">Min: ${item.min_stock_level}</div>
                </div>
            </div>
        `).join('');

        container.innerHTML = html;
    }

    renderRecentTransactions() {
        const container = document.getElementById('recent-transactions');
        if (!container) return;
        
        const recentTransactions = this.data.transactions
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);

        if (recentTransactions.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No recent transactions.</p></div>';
            return;
        }

        const html = recentTransactions.map(transaction => `
            <div class="transaction-item">
                <div class="transaction-info">
                    <h4>${transaction.item_name}</h4>
                    <p>${this.formatDate(transaction.date)} • ${transaction.project_name ? transaction.project_name : 'Stock Replenishment'}</p>
                </div>
                <div class="transaction-quantity">
                    <span class="transaction-type transaction-type--${transaction.type}">
                        ${transaction.type === 'incoming' ? '+' : '-'}${transaction.quantity}
                    </span>
                </div>
            </div>
        `).join('');

        container.innerHTML = html;
    }

    renderInventoryTable() {
        const tbody = document.getElementById('inventory-tbody');
        if (!tbody) return;
        
        let filteredItems = this.getFilteredInventoryItems();

        if (filteredItems.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8" class="text-center">No items found matching your criteria.</td></tr>';
            return;
        }

        const html = filteredItems.map(item => {
            const stockStatus = this.getStockStatus(item);
            return `
                <tr>
                    <td><strong>${item.name}</strong></td>
                    <td>${item.category}</td>
                    <td>${item.brand}</td>
                    <td>
                        <div class="stock-comparison">
                            <div class="stock-comparison-main">
                                <span class="stock-status stock-status--${stockStatus}">${item.current_stock}</span>
                                <div class="quick-adjust">
                                    <button class="quick-adjust-btn negative" onclick="window.app.adjustStock(${item.id}, -10)">-10</button>
                                    <button class="quick-adjust-btn negative" onclick="window.app.adjustStock(${item.id}, -5)">-5</button>
                                    <button class="quick-adjust-btn negative" onclick="window.app.adjustStock(${item.id}, -1)">-1</button>
                                    <button class="quick-adjust-btn positive" onclick="window.app.adjustStock(${item.id}, 1)">+1</button>
                                    <button class="quick-adjust-btn positive" onclick="window.app.adjustStock(${item.id}, 5)">+5</button>
                                    <button class="quick-adjust-btn positive" onclick="window.app.adjustStock(${item.id}, 10)">+10</button>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td><strong>${item.total_stock_received}</strong></td>
                    <td>${item.min_stock_level} / ${item.max_stock_level}</td>
                    <td>${item.location}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn btn--sm btn--outline" onclick="window.app.editItem(${item.id})">Edit</button>
                            <button class="btn btn--sm btn--outline" onclick="window.app.deleteItem(${item.id})">Delete</button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');

        tbody.innerHTML = html;
    }

    getFilteredInventoryItems() {
        const searchInput = document.getElementById('search-input');
        const categoryFilter = document.getElementById('category-filter');
        const locationFilter = document.getElementById('location-filter');
        const stockStatusFilter = document.getElementById('stock-status-filter');

        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const categoryValue = categoryFilter ? categoryFilter.value : '';
        const locationValue = locationFilter ? locationFilter.value : '';
        const stockStatusValue = stockStatusFilter ? stockStatusFilter.value : '';

        return this.data.inventory_items.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
                                item.brand.toLowerCase().includes(searchTerm);
            const matchesCategory = !categoryValue || item.category === categoryValue;
            const matchesLocation = !locationValue || item.location === locationValue;
            
            let matchesStockStatus = true;
            if (stockStatusValue) {
                const stockStatus = this.getStockStatus(item);
                matchesStockStatus = stockStatus === stockStatusValue;
            }

            return matchesSearch && matchesCategory && matchesLocation && matchesStockStatus;
        });
    }

    getStockStatus(item) {
        if (item.current_stock < item.min_stock_level) {
            return 'critical';
        } else if (item.current_stock <= item.min_stock_level * 1.2) {
            return 'low';
        } else {
            return 'good';
        }
    }

    renderTransactionsTable() {
        const tbody = document.getElementById('transactions-tbody');
        if (!tbody) return;
        
        let filteredTransactions = this.getFilteredTransactions();

        if (filteredTransactions.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="text-center">No transactions found matching your criteria.</td></tr>';
            return;
        }

        const html = filteredTransactions.map(transaction => `
            <tr>
                <td>${this.formatDate(transaction.date)}</td>
                <td>${transaction.item_name}</td>
                <td><span class="transaction-type transaction-type--${transaction.type}">${transaction.type}</span></td>
                <td class="font-bold">${transaction.type === 'incoming' ? '+' : '-'}${transaction.quantity}</td>
                <td>${transaction.project_name ? `<span class="project-tag">${transaction.project_name}</span>` : '-'}</td>
                <td>${transaction.notes}</td>
            </tr>
        `).join('');

        tbody.innerHTML = html;
    }

    getFilteredTransactions() {
        const typeFilter = document.getElementById('transaction-type-filter');
        const projectFilter = document.getElementById('project-filter');
        const dateFromFilter = document.getElementById('date-from-filter');
        const dateToFilter = document.getElementById('date-to-filter');

        const typeValue = typeFilter ? typeFilter.value : '';
        const projectValue = projectFilter ? projectFilter.value : '';
        const dateFromValue = dateFromFilter ? dateFromFilter.value : '';
        const dateToValue = dateToFilter ? dateToFilter.value : '';

        return this.data.transactions
            .filter(transaction => {
                const matchesType = !typeValue || transaction.type === typeValue;
                const matchesProject = !projectValue || transaction.project_name === projectValue;
                
                let matchesDateRange = true;
                if (dateFromValue || dateToValue) {
                    const transactionDate = new Date(transaction.date);
                    if (dateFromValue && transactionDate < new Date(dateFromValue)) {
                        matchesDateRange = false;
                    }
                    if (dateToValue && transactionDate > new Date(dateToValue + 'T23:59:59')) {
                        matchesDateRange = false;
                    }
                }

                return matchesType && matchesProject && matchesDateRange;
            })
            .sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    openItemModal(item = null) {
        const modal = document.getElementById('item-modal');
        const form = document.getElementById('item-form');
        const title = document.getElementById('item-modal-title');

        if (!modal || !form || !title) return;

        if (item) {
            title.textContent = 'Edit Item';
            this.currentEditingItemId = item.id;
            this.populateItemForm(item);
        } else {
            title.textContent = 'Add New Item';
            this.currentEditingItemId = null;
            form.reset();
        }

        modal.classList.remove('hidden');
    }

    openTransactionModal() {
        const modal = document.getElementById('transaction-modal');
        const form = document.getElementById('transaction-form');
        const projectField = document.getElementById('project-field');
        
        if (!modal || !form) return;
        
        form.reset();
        projectField.style.display = 'none';
        modal.classList.remove('hidden');
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
        this.currentEditingItemId = null;
    }

    populateItemForm(item) {
        const form = document.getElementById('item-form');
        if (!form) return;
        
        Object.keys(item).forEach(key => {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
                input.value = item[key];
            }
        });
    }

    handleItemSubmit(e) {
        const form = e.target;
        const formData = new FormData(form);
        const itemData = {};

        for (let [key, value] of formData) {
            if (['current_stock', 'total_stock_received', 'min_stock_level', 'max_stock_level'].includes(key)) {
                itemData[key] = parseFloat(value);
            } else {
                itemData[key] = value;
            }
        }

        if (this.currentEditingItemId) {
            // Edit existing item
            const itemIndex = this.data.inventory_items.findIndex(item => item.id === this.currentEditingItemId);
            if (itemIndex !== -1) {
                this.data.inventory_items[itemIndex] = {
                    ...this.data.inventory_items[itemIndex],
                    ...itemData,
                    last_updated: new Date().toISOString().slice(0, 19).replace('T', ' ')
                };
                this.showMessage('Item updated successfully!', 'success');
            }
        } else {
            // Add new item
            const newItem = {
                id: this.nextItemId++,
                ...itemData,
                last_updated: new Date().toISOString().slice(0, 19).replace('T', ' ')
            };
            this.data.inventory_items.push(newItem);
            
            // Update transaction dropdown
            const transactionItemSelect = document.querySelector('#transaction-form select[name="item_id"]');
            if (transactionItemSelect) {
                const option = new Option(newItem.name, newItem.id);
                transactionItemSelect.appendChild(option);
            }
            
            this.showMessage('Item added successfully!', 'success');
        }

        this.closeModal('item-modal');
        this.renderInventoryTable();
        this.updateDashboard();
    }

    handleTransactionSubmit(e) {
        const form = e.target;
        const formData = new FormData(form);
        
        const itemId = parseInt(formData.get('item_id'));
        const type = formData.get('type');
        const quantity = parseInt(formData.get('quantity'));
        const projectName = formData.get('project_name') || '';
        const notes = formData.get('notes') || '';

        const item = this.data.inventory_items.find(item => item.id === itemId);
        if (!item) {
            this.showMessage('Item not found!', 'error');
            return;
        }

        // Check project name requirement for outgoing transactions
        if (type === 'outgoing' && !projectName) {
            this.showMessage('Project name is required for outgoing transactions!', 'error');
            return;
        }

        // Check stock availability for outgoing transactions
        if (type === 'outgoing' && item.current_stock < quantity) {
            this.showMessage('Insufficient stock available!', 'error');
            return;
        }

        // Create transaction
        const transaction = {
            id: this.nextTransactionId++,
            item_id: itemId,
            item_name: item.name,
            type: type,
            quantity: quantity,
            date: new Date().toISOString().slice(0, 19).replace('T', ' '),
            project_name: projectName,
            notes: notes || (type === 'incoming' ? `Stock replenishment - Batch #${Math.floor(Math.random() * 10000)}` : `Used for project: ${projectName}`)
        };

        this.data.transactions.unshift(transaction);

        // Update item stock
        if (type === 'incoming') {
            item.current_stock += quantity;
            item.total_stock_received += quantity;
        } else {
            item.current_stock -= quantity;
        }

        item.last_updated = transaction.date;

        this.closeModal('transaction-modal');
        this.renderInventoryTable();
        this.renderTransactionsTable();
        this.updateDashboard();
        this.showMessage('Transaction recorded successfully!', 'success');
    }

    adjustStock(itemId, adjustment) {
        const item = this.data.inventory_items.find(item => item.id === itemId);
        if (!item) return;

        const newStock = item.current_stock + adjustment;
        if (newStock < 0) {
            this.showMessage('Stock cannot be negative!', 'error');
            return;
        }

        item.current_stock = newStock;
        if (adjustment > 0) {
            item.total_stock_received += adjustment;
        }
        item.last_updated = new Date().toISOString().slice(0, 19).replace('T', ' ');

        // Create a transaction record
        const transaction = {
            id: this.nextTransactionId++,
            item_id: itemId,
            item_name: item.name,
            type: adjustment > 0 ? 'incoming' : 'outgoing',
            quantity: Math.abs(adjustment),
            date: item.last_updated,
            project_name: adjustment < 0 ? 'Quick Adjustment' : '',
            notes: 'Quick stock adjustment'
        };

        this.data.transactions.unshift(transaction);

        this.renderInventoryTable();
        this.updateDashboard();
    }

    editItem(itemId) {
        const item = this.data.inventory_items.find(item => item.id === itemId);
        if (item) {
            this.openItemModal(item);
        }
    }

    deleteItem(itemId) {
        if (confirm('Are you sure you want to delete this item?')) {
            this.data.inventory_items = this.data.inventory_items.filter(item => item.id !== itemId);
            this.data.transactions = this.data.transactions.filter(transaction => transaction.item_id !== itemId);
            
            // Remove from transaction dropdown
            const transactionItemSelect = document.querySelector('#transaction-form select[name="item_id"]');
            if (transactionItemSelect) {
                const option = transactionItemSelect.querySelector(`option[value="${itemId}"]`);
                if (option) {
                    option.remove();
                }
            }
            
            this.renderInventoryTable();
            this.renderTransactionsTable();
            this.updateDashboard();
            this.showMessage('Item deleted successfully!', 'success');
        }
    }

    showMessage(message, type) {
        const messageEl = document.getElementById('message');
        if (!messageEl) return;
        
        messageEl.textContent = message;
        messageEl.className = `message message--${type}`;
        messageEl.classList.remove('hidden');

        setTimeout(() => {
            messageEl.classList.add('hidden');
        }, 3000);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// Initialize the app and make it globally available
window.app = new InventoryApp();
