<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', 'Dashboard') - Portfolio</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --primary-color: #4f46e5;
            --secondary-color: #10b981;
            --danger-color: #ef4444;
            --warning-color: #f59e0b;
            --light-bg: #f9fafb;
            --sidebar-width: 280px;
        }

        * {
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-color: var(--light-bg);
            margin: 0;
            padding: 0;
        }

        /* Navigation Bar */
        .navbar {
            background: white;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            padding: 1rem 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1030;
        }

        .navbar-brand {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color) !important;
        }

        .navbar-brand img {
            height: 40px;
            margin-right: 0.5rem;
        }

        /* Sidebar */
        .sidebar {
            position: fixed;
            top: 70px;
            left: 0;
            width: var(--sidebar-width);
            height: calc(100vh - 70px);
            background: white;
            overflow-y: auto;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
            z-index: 1020;
        }

        .sidebar-menu {
            list-style: none;
            padding: 1.5rem 0;
            margin: 0;
        }

        .sidebar-menu li {
            margin: 0;
        }

        .sidebar-menu a {
            display: flex;
            align-items: center;
            padding: 0.75rem 1.5rem;
            color: #6b7280;
            text-decoration: none;
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
        }

        .sidebar-menu a:hover {
            background-color: var(--light-bg);
            color: var(--primary-color);
            border-left-color: var(--primary-color);
        }

        .sidebar-menu a.active {
            background-color: rgba(79, 70, 229, 0.1);
            color: var(--primary-color);
            border-left-color: var(--primary-color);
            font-weight: 600;
        }

        .sidebar-menu i {
            width: 24px;
            margin-right: 0.75rem;
            text-align: center;
        }

        .sidebar-title {
            padding: 1rem 1.5rem 0.5rem;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            color: #9ca3af;
            margin-top: 1rem;
        }

        /* Main Content */
        .main-content {
            margin-top: 70px;
            margin-left: var(--sidebar-width);
            padding: 2rem;
            min-height: calc(100vh - 70px);
        }

        /* Page Header */
        .page-header {
            margin-bottom: 2rem;
        }

        .page-header h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 0.5rem;
        }

        .page-header p {
            color: #6b7280;
            margin: 0;
        }

        /* Cards */
        .card {
            border: none;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            margin-bottom: 2rem;
        }

        .card:hover {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .card-header {
            background-color: var(--light-bg);
            border: none;
            border-bottom: 1px solid #e5e7eb;
            padding: 1.5rem;
        }

        .card-body {
            padding: 1.5rem;
        }

        /* Alert Messages */
        .alert {
            border: none;
            border-radius: 0.75rem;
            margin-bottom: 1.5rem;
        }

        .alert-success {
            background-color: rgba(16, 185, 129, 0.1);
            color: #059669;
            border-left: 4px solid var(--secondary-color);
        }

        .alert-danger {
            background-color: rgba(239, 68, 68, 0.1);
            color: #dc2626;
            border-left: 4px solid var(--danger-color);
        }

        .alert-warning {
            background-color: rgba(245, 158, 11, 0.1);
            color: #b45309;
            border-left: 4px solid var(--warning-color);
        }

        .alert-info {
            background-color: rgba(59, 130, 246, 0.1);
            color: #1e40af;
            border-left: 4px solid #3b82f6;
        }

        /* Buttons */
        .btn-primary {
            background-color: var(--primary-color);
            border-color: var(--primary-color);
            font-weight: 600;
        }

        .btn-primary:hover {
            background-color: #4338ca;
            border-color: #4338ca;
        }

        .btn-secondary {
            background-color: #6b7280;
            border-color: #6b7280;
            font-weight: 600;
        }

        .btn-secondary:hover {
            background-color: #4b5563;
            border-color: #4b5563;
        }

        /* Footer */
        .footer {
            background: white;
            border-top: 1px solid #e5e7eb;
            padding: 2rem;
            margin-left: var(--sidebar-width);
            margin-top: 3rem;
            text-align: center;
            color: #6b7280;
        }

        .footer a {
            color: var(--primary-color);
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            :root {
                --sidebar-width: 0;
            }

            .navbar-toggler {
                border: none;
            }

            .sidebar {
                transform: translateX(-100%);
                transition: transform 0.3s ease;
                width: 250px;
            }

            .sidebar.show {
                transform: translateX(0);
            }

            .main-content {
                margin-left: 0;
                padding: 1rem;
            }

            .footer {
                margin-left: 0;
            }

            .page-header h1 {
                font-size: 1.5rem;
            }
        }

        /* Scrollbar Styling */
        .sidebar::-webkit-scrollbar {
            width: 6px;
        }

        .sidebar::-webkit-scrollbar-track {
            background: var(--light-bg);
        }

        .sidebar::-webkit-scrollbar-thumb {
            background: #d1d5db;
            border-radius: 3px;
        }

        .sidebar::-webkit-scrollbar-thumb:hover {
            background: #9ca3af;
        }

        /* User Profile Section */
        .user-profile {
            padding: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
            text-align: center;
        }

        .user-profile img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-bottom: 0.75rem;
            object-fit: cover;
        }

        .user-profile p {
            margin: 0.25rem 0;
            font-weight: 600;
            color: #1f2937;
        }

        .user-profile small {
            color: #9ca3af;
        }
    </style>

    @yield('styles')
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="{{ route('dashboard') ?? '/' }}">
                <i class="fas fa-code"></i> Portfolio
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse ms-auto" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user-circle"></i> Account
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#"><i class="fas fa-user"></i> Profile</a></li>
                            <li><a class="dropdown-item" href="#"><i class="fas fa-cog"></i> Settings</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li>
                                <form method="POST" action="{{ route('logout') ?? '#' }}">
                                    @csrf
                                    <button type="submit" class="dropdown-item">
                                        <i class="fas fa-sign-out-alt"></i> Logout
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Sidebar (Desktop) -->
    <div class="sidebar d-none d-lg-block">
        <div class="user-profile">
            <img src="https://ui-avatars.com/api/?name=User&background=4f46e5&color=fff" alt="User Avatar">
            <p>User Name</p>
            <small>Administrator</small>
        </div>

        <ul class="sidebar-menu">
            <div class="sidebar-title">Main Menu</div>
            
            <li>
                <a href="{{ route('dashboard') ?? '/' }}" class="@yield('active-dashboard')">
                    <i class="fas fa-chart-line"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <li>
                <a href="#" class="">
                    <i class="fas fa-briefcase"></i>
                    <span>Projects</span>
                </a>
            </li>

            <li>
                <a href="#" class="">
                    <i class="fas fa-image"></i>
                    <span>Portfolio</span>
                </a>
            </li>

            <li>
                <a href="#" class="">
                    <i class="fas fa-envelope"></i>
                    <span>Messages</span>
                </a>
            </li>

            <div class="sidebar-title">Management</div>

            <li>
                <a href="#" class="">
                    <i class="fas fa-users"></i>
                    <span>Users</span>
                </a>
            </li>

            <li>
                <a href="#" class="">
                    <i class="fas fa-file-alt"></i>
                    <span>Content</span>
                </a>
            </li>

            <div class="sidebar-title">Other</div>

            <li>
                <a href="#" class="">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </li>

            <li>
                <a href="#" class="">
                    <i class="fas fa-question-circle"></i>
                    <span>Help & Support</span>
                </a>
            </li>
        </ul>
    </div>

    <!-- Sidebar (Mobile - Offcanvas) -->
    <div class="offcanvas offcanvas-start d-lg-none" tabindex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasSidebarLabel">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body p-0">
            <ul class="sidebar-menu w-100">
                <div class="sidebar-title">Main Menu</div>
                
                <li>
                    <a href="{{ route('dashboard') ?? '/' }}" class="">
                        <i class="fas fa-chart-line"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#" class="">
                        <i class="fas fa-briefcase"></i>
                        <span>Projects</span>
                    </a>
                </li>

                <li>
                    <a href="#" class="">
                        <i class="fas fa-image"></i>
                        <span>Portfolio</span>
                    </a>
                </li>

                <li>
                    <a href="#" class="">
                        <i class="fas fa-envelope"></i>
                        <span>Messages</span>
                    </a>
                </li>

                <div class="sidebar-title">Management</div>

                <li>
                    <a href="#" class="">
                        <i class="fas fa-users"></i>
                        <span>Users</span>
                    </a>
                </li>

                <li>
                    <a href="#" class="">
                        <i class="fas fa-file-alt"></i>
                        <span>Content</span>
                    </a>
                </li>

                <div class="sidebar-title">Other</div>

                <li>
                    <a href="#" class="">
                        <i class="fas fa-cog"></i>
                        <span>Settings</span>
                    </a>
                </li>

                <li>
                    <a href="#" class="">
                        <i class="fas fa-question-circle"></i>
                        <span>Help & Support</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <!-- Flash Messages -->
        @if ($errors->any())
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong><i class="fas fa-exclamation-circle"></i> Errors:</strong>
                <ul class="mb-0 mt-2">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        @if (session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="fas fa-check-circle"></i> {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        @if (session('error'))
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <i class="fas fa-exclamation-circle"></i> {{ session('error') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        @if (session('warning'))
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <i class="fas fa-exclamation-triangle"></i> {{ session('warning') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        @if (session('info'))
            <div class="alert alert-info alert-dismissible fade show" role="alert">
                <i class="fas fa-info-circle"></i> {{ session('info') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        <!-- Page Header -->
        <div class="page-header">
            @yield('page-header')
        </div>

        <!-- Page Content -->
        @yield('content')
    </div>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; {{ date('Y') }} Portfolio Dashboard. All rights reserved. | Design by <a href="#">Your Name</a></p>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    
    <!-- jQuery (Optional) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <script>
        // Set active menu item based on current route
        document.addEventListener('DOMContentLoaded', function() {
            const currentUrl = window.location.href;
            const menuItems = document.querySelectorAll('.sidebar-menu a');
            
            menuItems.forEach(item => {
                if (item.href === currentUrl) {
                    item.classList.add('active');
                }
            });
        });

        // Auto-hide alerts after 5 seconds
        document.querySelectorAll('.alert').forEach(function(alert) {
            setTimeout(function() {
                const bsAlert = new bootstrap.Alert(alert);
                bsAlert.close();
            }, 5000);
        });
    </script>

    @yield('scripts')
</body>
</html>