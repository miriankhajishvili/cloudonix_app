import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.scss',
})
export class PagenotfoundComponent {}
